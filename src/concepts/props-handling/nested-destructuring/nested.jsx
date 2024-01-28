const Nested = () => {
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
    return (
        <NestedPropsList/>
    )
}
export default Nested;