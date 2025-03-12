import React from 'react'
import { useState } from 'react'

function UserForm()
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSumbit = (event) =>
    {
        event.preventDefault();
        if (!name || !email || !password)
        {
            alert("Please fill in all the fields before submitting.");
            return;
        }
        alert(`Name: ${name} \nEmail: ${email}\nPassword: ${password}`);
        setName('');
        setEmail('');
        setPassword('');

    };

    return (
        <div className=" min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-600">
            <div className='border-2 m-4 p-5 rounded-3xl w-120 h-120 text-center flex flex-col items-center justify-center shadow-2xl bg-gray-800'>
                <h2 className='text-2xl text-white text-center mb-6'>USER LOGIN</h2>
                <form onSubmit={handleSumbit}>
                    {/* Name input */}
                    <input type="text"
                        placeholder='Enter Name:'
                        value={name}
                        className='border rounded p-4 font-semibold w-full mb-5 bg-gray-700 text-white focus:outline-none focus:ring-1'
                        onChange={(event) => setName(event.target.value)}
                    />

                    {/* Passwrod Input */}
                    <input type="text"
                        placeholder='Enter Email:'
                        value={email}
                        className='border rounded p-4 font-semibold w-full mb-5 bg-gray-700 text-white focus:outline-none focus:ring-1'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {/* Passowrd input */}
                    <input type="password"
                        placeholder='Enter Password'
                        value={password}
                        className='border rounded p-4 font-semibold w-full mb-5 bg-gray-700 text-white focus:outline-none focus:ring-1'
                        onChange={(event) => setPassword(event.target.value)}
                    />


                    {/* Submit Button */}
                    <button
                        type='submit'
                        className='w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600'
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserForm 
