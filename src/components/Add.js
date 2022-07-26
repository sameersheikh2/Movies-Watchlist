import React, { useState } from 'react'

const Add = () => {
    const [query, setQuery] = useState()
    const [result, setResult] = useState([])
    const key = "01c3da185b5eef24879699f5137b813f";

    const queryHandler = (e) => {
        setQuery(e.target.value)


    }


    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" value={query} placeholder='Search for movies' onChange={queryHandler} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add