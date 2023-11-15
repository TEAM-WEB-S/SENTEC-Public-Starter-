// Abbas

import React, { useState } from 'react';

const ContactForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState(''); 
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Username: ${username}, Email: ${email}, phoneNo: ${phoneNo}, Message: ${message}`);
        //Add logic to submit form data to server
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h1 className="text-gray-700 font-bold text-4xl mb-2 text-center">Contact Us</h1>
            <h2 className='text-gray-700 mb-2'>Please fill in the form below</h2>
            <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your username"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    PhoneNo
                </label>
                <input
                    type="number"
                    id="phoneNo"
                    value={phoneNo}
                    onChange={(event) => setPhoneNo(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your PhoneNo"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Enter your message
                </label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your message"
                    rows={5}
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ContactForm;