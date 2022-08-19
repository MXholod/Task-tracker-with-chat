import React from 'react';
import { ITask } from './../models/Task';

interface ITaskProps{
    task: ITask;
}

export const Task:React.FunctionComponent<ITaskProps> = ({ task }):JSX.Element=>{
    return (<div key={ task.id } className="flex border border-black p-2 mb-2">
        <span className="px-2">User ID: { task.userId }</span>
        <input type="checkbox" readOnly disabled checked={ task.completed } className="mr-2" />
        <p>{ task.title }</p>
    </div>);
}