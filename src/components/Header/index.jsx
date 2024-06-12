import React, { Component } from 'react';

export default function Header() {
    return <div>
        <p>Header</p>
        <li>
            <a href="/home">home
            </a>
        </li>
        <li><a href="/about">about
        </a></li>
        <li>
            <a href="/">/
            </a>
        </li>
        <li><a href="/magic">magic
        </a></li>
    </div>
}