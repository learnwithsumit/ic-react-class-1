import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0); // [currentValue, changeValue]

    const handleClick = () => {
        setCount((c) => c + 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment +3</button>
        </div>
    );
}
