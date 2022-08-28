import React from "react"
import { NavLink } from 'react-router-dom';
import { BsChatSquareText } from 'react-icons/bs';

function authClasses():string{
    let baseClasses = 'pr-2 font-medium bg-slate-300 mr-2 rounded px-2 py-1 text-center';
    let hoverClasses = 'hover:bg-slate-400 hover:border-white hover:border hover:border-solid hover:text-white';
    let activeClasses = 'active:bg-slate-400 active:border-white active:border active:border-solid active:text-white';
    return `${baseClasses} ${hoverClasses} ${activeClasses}`;
}

export const NavigationUserBlock:React.FunctionComponent = ():JSX.Element=>{
    
    return (<>
        <nav>
            <ul className='flex mr-8 items-center h-full text-sm'>
                <li className={ authClasses() }>
                    <NavLink to='/signin'>Sign in</NavLink>
                </li>
                <li className={ authClasses() }>
                    <NavLink to='/signup'>Sign up</NavLink>
                </li>
                <li className='flex font-medium bg-stone-300 rounded px-2 py-1 w-20 justify-around hover:bg-stone-200 active:bg-stone-200'>
                    <NavLink to='/chat'>Chat</NavLink>
                    <BsChatSquareText className="self-center"/>
                </li>
            </ul>
        </nav>
    </>)
}