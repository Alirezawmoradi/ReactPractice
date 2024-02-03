import {useEffect, useReducer, useState} from "react";
import Search from "../lifting-state/search.jsx";
import InlineHandlerList from "../inline-handler/inline-handler-list.jsx";

const ReactReducer = () => {
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
            case 'SET_STORIES':
                return action.payload;
            case 'REMOVE_STORIES':
                return state.filter(story => story.id !== action.payload);
            default:
                return state;
        }
    }
    // const [stories, setStories] = useState([]);
    const [stories, dispatchStories] = useReducer(storiesReducer, []);

    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleRemoveStory = (id) => {
        dispatchStories({type: 'REMOVE_STORIES', payload: id});
    }
    const handleLifting = (event) => {
        setSearchTerm(event.target.value);
    }
    const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));
    useEffect(() => {
        setIsLoading(true);
        getAsyncStories().then(result => {
            dispatchStories({type: 'SET_STORIES', payload: result.data.stories})
            setIsLoading(false);
        }).catch(() => setIsError(true));
    }, []);
    return (
        <div>
            <Search onSearch={handleLifting}/>
            {
                isError && <p>Something went wrong</p>
            }
            {
                isLoading ?
                    <p>Loading...</p>
                    :
                    <InlineHandlerList list={searchedStories} onRemoveItem={handleRemoveStory}/>
            }
        </div>
    );
}