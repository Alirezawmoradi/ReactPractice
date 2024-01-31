const Item = ({id, title, url, author, num_comments, points, onRemoveItem}) => {
    return (
        <li>
            <span>
                <a href={url}>
                    {title}
                </a>
            </span>
            <span>
                {author}
            </span>
            <span>
                {num_comments}
            </span>
            <span>
                {points}
            </span>
            <button onClick={() => onRemoveItem(id)}>Remove for inline handler concept</button>
        </li>
    )
}
export default Item;