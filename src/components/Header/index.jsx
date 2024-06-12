import React from 'react';

export default function Header() {
    return <div className='text-center border p-4'>
        <p className='font-bold'>Header</p>
        <nav className='flex justify-around'>
            <a className='bg-red-400 text-white px-4 py-2' href="/">/
            </a>
            <a className='bg-red-400 text-white px-4 py-2' href="/home">home
            </a>
            <a className='bg-red-400 text-white px-4 py-2' href="/about">about
            </a>

            <a className='bg-red-400 text-white px-4 py-2' href="/magic">magic
            </a>
        </nav>
    </div>
}