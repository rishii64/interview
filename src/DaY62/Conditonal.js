import React, { useState } from "react";

export default function Conditional() {
    const [data, setData] = useState(true)
    return (
        <>
            <h2></h2>
            {data ? <Call1 /> : null}
            {data ? <Call2 /> : null}
            {/* {data && <Call2/>} */}
            <button onClick={() => setData(!data)}>switch</button>
        </>
    )
}

function Call1() {
    return (
        <h2>Component 1</h2>
    )
}

function Call2() {
    return (
        <h2>Component 2</h2>
    )
}