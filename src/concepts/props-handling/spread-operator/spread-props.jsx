import SpreadPropsItem from "./spread-props-item.jsx";

const SpreadProps = ({list}) => {
    return (
        <ul>
            {
                list.map((item) => (
                    <SpreadPropsItem key={item.id} {...item}/>
                ))
            }
        </ul>
    )
}