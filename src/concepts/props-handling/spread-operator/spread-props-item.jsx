const SpreadPropsItem = ({id, url, title, author, num_comments, points}) => {
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
        </li>
    )
}
export default SpreadPropsItem;
