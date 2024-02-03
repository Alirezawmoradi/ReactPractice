import {useEffect, useReducer, useState} from "react";
import Search from "../lifting-state/search.jsx";
import InlineHandlerList from "../inline-handler/inline-handler-list.jsx";

const DataFetching = () => {
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
    const searchedStories = stories.data.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));
    useEffect(() => {
        dispatchStories({type: 'STORIES_FETCH_INIT'});

        //Fetching API

        fetch(API_CALL).then(response => response.json()).then((stories) => {
            dispatchStories({type: 'STORIES_FETCH_SUCCESS', payload: stories})
        }).catch(() => dispatchStories({type: 'STORIES_FETCH_FAILURE'}));


    }, []);
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
                    <InlineHandlerList list={searchedStories} onRemoveItem={handleRemoveStory}/>
            }
        </div>
    );
}