import { useState, useEffect } from 'react';
import { ITask } from './../models/Task';

export const Tasks:React.FunctionComponent = ()=>{
    const [tasks, setTasks] = useState<ITask[]>([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users/1/todos?_limit=5')
        .then((response) => response.json())
        .then((json) =>{
            //console.log(json)
            setTimeout(()=> setTasks(json), 2000);
        });
    },[]);

    return (<>
        <div className="font-medium">List of tasks:</div>
        { !tasks.length && <p className="text-lg text-fuchsia-600 text-center">Loading...</p> }
        { !!tasks.length && tasks.map((task)=>{
            return (<div key={ task.id } className="flex border border-black p-2 mb-2">
                <span className="px-2">User ID: { task.userId }</span>
                <input type="checkbox" readOnly disabled checked={ task.completed } className="mr-2" />
                <p>{ task.title }</p>
            </div>)
        }) }
    </>)
}