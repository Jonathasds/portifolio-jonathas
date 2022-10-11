/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gray-900 flex justify-center items-center p-3'>
            <form method="POST" target="_blank" action="https://getform.io/f/5a6ce62f-ec4f-44c2-b885-9a4085f72f4b" className=' flex flex-col max-w-[600px]'>
                <div className='pb-8  text-center' >
                    <p className=' text-3xl md:text-font-bold inline border-b-4 i border-green-700 text-gray-300'>Contact</p>
                    <p className=' text-gray-300 py-4'>// Submit the form below or email - jonathadelgado@gmail.com</p>
                </div>
                <input className='my-2 p-2 bg-green-200 ' type="text" placeholder='Name' name='name' />
                <input className='my-2 p-2 bg-green-200' type="email" placeholder='Email' name='email' />
                <input className='my-2 p-2 bg-green-200 ' type="tel" placeholder='N° Telefone (xx) xxxxx-xxxx' name="phone"/>
                <textarea className='bg-green-200 my-2' name="message"  rows="5" placeholder='Message'></textarea>
                <button  className=' text-white border-2 border-green-200 hover:bg-green-700 hover:border-green-200 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    );
}

export default Contact;
