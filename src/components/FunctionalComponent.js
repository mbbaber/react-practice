import React, {useState, useEffect} from "react";

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title =  `clicked ${count} times`
    })
    
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