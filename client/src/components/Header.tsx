import React from 'react';
import { Navigation } from './../components/Navigation';

export const Header:React.FC = ()=>{
    return (<header className='flex justify-between w-[100%] h-[100px] border bg-slate-400'>
        <div>Header</div>
        <Navigation />
        <div>User info</div>
    </header>);
}