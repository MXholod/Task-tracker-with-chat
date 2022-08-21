import { useState, useEffect } from 'react';
import { ITask } from './../models/Task';
import { Task } from './../components/Task';

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
            return (<Task task={ task } key={ task.id } />)
        }) }
    </>)
}