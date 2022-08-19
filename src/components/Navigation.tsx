import React from "react"
import { NavLink } from 'react-router-dom';

export const Navigation:React.FunctionComponent = ()=>{
    return (<>
        <nav>
            <ul className='flex'>
                <li className='pr-2'>
                    <NavLink to='/'>Main</NavLink>
                </li>
                <li className='pr-2'>
                    <NavLink to='/tasks'>Tasks</NavLink>
                </li>
                <li>
                    <NavLink to='/add-task'>Add task</NavLink>
                </li>
            </ul>
        </nav>
    </>)
}