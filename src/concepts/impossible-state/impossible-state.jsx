import {useEffect, useReducer, useState} from "react";
import Search from "../lifting-state/search.jsx";
import InlineHandlerList from "../inline-handler/inline-handler-list.jsx";

const ImpossibleState = () => {
    const getAsyncStories = () => new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: {
                    stories: initialPromiseStories
                }
            })
        }, 2000)
    })
    const initialPromiseStories = [
        {
            id: 0,
            title: 'React',
            url: 'https://reactjs.org',
            author: 'Alireza Moradi',
            num_comments: 3,
            points: 4
        },
        {
            id: 1,
            title: 'Redux',
            url: 'https://redux.js.org',
            author: 'Hamidreza Kamalzadeh',
            num_comments: 2,
            points: 5
        },
        {
            id: 2,
            title: 'Vite',
            url: 'https://vitejs.dev',
            author: 'Kamyab Valipour',
            num_comments: 6,
            points: 1
        }

    ]

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
        getAsyncStories().then(result => {
            dispatchStories({type: 'STORIES_FETCH_SUCCESS', payload: result.data.stories})
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