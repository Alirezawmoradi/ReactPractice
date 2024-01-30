import {useEffect, useState} from "react";

const useColorState = (initialState) => {
    const [color, setColor] = useState(initialState);
    useEffect(() => {
        setColor(color);
    }, [color]);
    return [color, setColor];
}
export default useColorState;