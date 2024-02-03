import {useEffect, useReducer, useState} from "react";
import Search from "../lifting-state/search.jsx";
import InlineHandlerList from "../inline-handler/inline-handler-list.jsx";

const DataFetching = () => {

    if (!searchTerm) return;

    const storiesReducer = (state, action) => {
        switch (action.type) {
            case 'STORIES_FETCH_INIT':
                return {
                    ...state,
                    isLoading: true,
                    isError: false
                }
            case 'STORIES_FETCH_SUCCESS':
                return {
                    ...state,
                    isLoading: false,
                    isError: false,
                    data: action.payload
                }
            case 'STORIES_FETCH_FAILURE':
                return {
                    ...state,
                    isLoading: false,
                    isError: true
                }
            case 'REMOVE_STORIES':
                return {
                    ...state,
                    data: state.filter(story => story.id !== action.payload),
                }
            default:
                return state;
        }
    }
    const [stories, dispatchStories] = useReducer(storiesReducer, {
        data: [], isLoading: false, isError: false
    });

    const [searchTerm, setSearchTerm] = useState('');
    const handleRemoveStory = (id) => {
        dispatchStories({type: 'REMOVE_STORIES', payload: id});
    }
    const handleLifting = (event) => {
        setSearchTerm(event.target.value);
    }
    useEffect(() => {
        dispatchStories({type: 'STORIES_FETCH_INIT'});

        //Fetching API

        fetch(API_CALL).then(response => response.json()).then((stories) => {
            dispatchStories({type: 'STORIES_FETCH_SUCCESS', payload: stories})
        }).catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}));

        //Fetching API FOR LIST
        fetch(`${API_CALL}?query=${searchTerm}`).then(response => response.json()).then((stories) => {
            dispatchStories({type: 'STORIES_FETCH_SUCCESS', payload: stories})
        }).catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}));


    }, [searchTerm]);
    return (
        <div>
            <Search onSearch={handleLifting}/>
            {
                stories.isError && <p>Something went wrong</p>
            }
            {
                stories.isLoading ?
                    <p>Loading...</p>
                    :
                    <InlineHandlerList list={stories.data} onRemoveItem={handleRemoveStory}/>
            }
        </div>
    );
}