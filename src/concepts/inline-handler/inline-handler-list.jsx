import Item from "./item.jsx";

const InlineHandlerList = ({list,onRemoveItem}) => {
    return (
        <div>
            <ul>
                {
                    list.map((item) => (
                        <Item key={item.id} {...item} onRemoveItem={onRemoveItem}/>
                        ))
                }
            </ul>
        </div>
    )
}
export default InlineHandlerList;