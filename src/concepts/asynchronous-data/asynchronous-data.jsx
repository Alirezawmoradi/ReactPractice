import {useEffect, useState} from "react";
import Search from "../lifting-state/search.jsx";
import InlineHandlerList from "../inline-handler/inline-handler-list.jsx";

const AsynchronousData = () => {
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
    const [searchTerm, setSearchTerm] = useState('');
    const [stories, setStories] = useState([]);
    const handleRemoveStory = (id) => {
        const newStory = stories.filter(story => story.id !== id);
        setStories(newStory);
    }
    const handleLifting = (event) => {
        setSearchTerm(event.target.value);
    }
    const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));
    useEffect(() => {
        getAsyncStories().then(result => {
            setStories(result.data.stories)
        })
    }, []);
    return (
        <div>
            <Search onSearch={handleLifting}/>
            <InlineHandlerList list={searchedStories} onRemoveItem={handleRemoveStory}/>
        </div>
    );
}