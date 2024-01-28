const List = ({list}) => {
    return (
        <div>
            <ul>
                {
                    list.map((item) => {
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
export default List