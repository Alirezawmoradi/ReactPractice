const List = [
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
const ReactList = () => {
    return (
        <div>
            <ul>
                {
                    List.map((item) => {
                        return (
                            <li key={item.id}>
                                <span>
                                    <a href={item.url}>{item.title}</a>
                                </span>
                                <span>
                                    {item.author}
                                </span>
                                <span>
                                    {item.num_comments}
                                </span>
                                <span>
                                    {item.points}
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ReactList;