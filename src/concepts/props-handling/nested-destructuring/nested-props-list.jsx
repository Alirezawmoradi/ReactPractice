const NestedPropsList = ({item: {id, url, title, author, num_comments, points}}) => {
    return (
        <li key={id}>
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
