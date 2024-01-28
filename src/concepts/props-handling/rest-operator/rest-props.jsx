import SpreadPropsItem from "../spread-operator/spread-props-item.jsx";
import RestPropsItem from "./rest-props-item.jsx";

const RestProps = ({list}) => {
    return (
        <ul>
            {
                list.map(({id, ...item}) => (
                    <RestPropsItem key={id} {...item}/>
                ))
            }
        </ul>
    )
}