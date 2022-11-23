import React, { useEffect, useState } from 'react'

function DocTitleOne() {

    const [count, setCount] = useState(0)
   
    useEffect(() => {
        document.title = `Current Count - ${count}`
    }, [count])
   
    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitleOne
