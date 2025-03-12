import React from 'react'
import { useState } from 'react'

function UserForm()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSumbit = (event) =>
    {
        event.preventDefault();
        if (!name || !email)
        {
            alert("Please fill in all the fields before submitting.");
            return;
        }
        console.log(`Name: ${name} , Email: ${email}`);
        setName('');
        setEmail('');

    };

    return (
        <div className=" min-h-screen border-2 m-4 p-5 rounded-3xl w-120 flex items-center justify-center">
            <div className='text-center flex items-center justify-center'>
                <form onSubmit={handleSumbit}>
                    <input type="text"
                        placeholder='Enter Name:'
                        value={name}
                        className='border rounded p-2 font-semibold w-full mb-5'
                        onChange={(event) => setName(event.target.value)}
                    />

                    <input type="text"
                        placeholder='Enter Email:'
                        value={email}
                        className='border rounded p-2 font-semibold w-full mb-5'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <button
                        type='submit'
                        className='border rounded-xl py-2 px-4 hover:bg-zinc-600 text-white bg-zinc-500'
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserForm 
