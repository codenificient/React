import React, { useEffect, useState } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('UseEffect - updating document title')
        document.title = `You Clicked ${count} times`

    }, [count])

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>Increment Hooks Counter {count}</button>
        </div>
    )
}

export default HookCounterOne
