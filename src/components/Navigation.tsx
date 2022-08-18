import React from "react"
import { NavLink } from 'react-router-dom';

export const Navigation:React.FunctionComponent = ()=>{
    return (<>
        <nav>
            <ul className='flex'>
                <li className='pr-2'>
                <NavLink to='/'>Main</NavLink>
                </li>
                <li>
                <NavLink to='/tasks'>Tasks</NavLink>
                </li>
            </ul>
        </nav>
    </>)
}