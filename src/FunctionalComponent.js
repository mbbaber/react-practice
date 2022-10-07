import React, {useState} from "react";

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1)
    }
    return(
        <div>Function counter
            <button onClick={increment}>{count}</button>
        </div>
    )
}

export default FunctionalComponent;