import {  Route, Routes } from 'react-router-dom';
import { Main } from './../pages/Main';
import { Tasks } from './../pages/Tasks';

export const Content:React.FunctionComponent = ()=>{
    return (<main className="bg-gray-200">
        <h3>Content</h3>
        <Routes>
            <Route path={ '/' } element={ <Main />} />
            <Route path={ '/tasks' } element={ <Tasks />} />
        </Routes>
    </main>)
}
  