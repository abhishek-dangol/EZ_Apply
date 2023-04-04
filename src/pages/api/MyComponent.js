import React, {useState} from "react";

export default function MyComponent() {
    const [data, setData] = useState(null);

    async function handleClick() {
        const response = await fetch('https://animechan.vercel.app/api/random');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(data)
    }

    return (
        <div>
            <button onClick={handleClick}>Fetch Data</button>
        </div>
    );
}

