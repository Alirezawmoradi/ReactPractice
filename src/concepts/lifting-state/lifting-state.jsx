// transform state from component to another component is lifting state concept
// states should be in a component that uses directly or children of that component use it and give it from props

import {useState} from "react";
import Search from "./search.jsx";
import List from "./list.jsx";

const LiftingState = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const stories = [
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
    const handleLifting = (event) => {
        setSearchTerm(event.target.value);
    }
    const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <Search onSearch={handleLifting}/>
            <List list={searchedStories}/>
        </div>
    )
}
export default LiftingState;