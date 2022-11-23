import React, { useState } from 'react'
import useInput from '../Hooks/useInput'

function UserForm() {


    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input {...bindFirstName} type="text"/>
                    <label htmlFor="lastName">Last Name</label>
                    <input {...bindLastName} type="text"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UserForm
