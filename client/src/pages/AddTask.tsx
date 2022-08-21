import React, { useState, useRef } from 'react';

export const AddTask:React.FC = ()=>{
    const [taskText, setTaskText] = useState<string>('');
    const [date, setDate] = useState<string | number>('');
    const [reminder, setReminder] = useState<boolean>(false);
    const dateRef = useRef<HTMLInputElement | null>(null);
    //Form submit
    const handleForm = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(taskText.trim() !== '' && date !== ''){
            //Prepare Task object
            const userTask = {
                "userId": 1,
                "id": 1,
                "title": taskText,
                "taskDate": date,
                "reminder": reminder,
                "completed": false
            }
            console.log("Submited ",userTask);
        }else{
            console.log("Not all fields are filled");
        }
    }
    //Task text
    const taskTextHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setTaskText((s)=>e.target.value);
    }
    //Date
    const dateHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let ms = Date.parse(e.target.value);
        //new Date(ms).getDate()
        if(dateRef.current?.value){
            let chosenDate = Date.parse(dateRef.current?.value);
            let currentDate = new Date().getTime();
            if(currentDate < chosenDate){
                setDate(ms);
            }else{
                console.log("Chosen date is expired");
            }
        }
    }
    //Reminder
    const reminderHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.checked){
            console.log("Checked ",e.target.checked);
        }else{
            console.log("Unchecked ",e.currentTarget.checked);
        }
        setReminder(e.target.checked);
    }

    return (<>
        <h3 className="pl-4 text-lime-900 font-medium ml-8">Add new task</h3>
        <form onSubmit={ handleForm }
            className="flex flex-col w-1/3 bg-indigo-200 border border-solid border-black px-4 py-4 ml-8 mb-8">
            <label className="flex flex-col w-1/2 my-2 border border-solid border-slate-400">
                <input type="text" placeholder="Add task" className="pl-2" 
                    value={ taskText } onChange={ taskTextHandler  }    
                />
            </label>
            <label className="w-1/2 my-2 pl-2 bg-emerald-300 border border-solid border-slate-400">
                Set date
                <input type="date" className="relative top-0 left-4" 
                    onChange={ dateHandler  }
                    ref={ dateRef }
                />
            </label>
            <label className="w-1/2 my-2 pl-2 bg-emerald-300 border border-solid border-slate-400">
                Set reminder
                <input type="checkbox" className="relative top-0.5 left-4"
                    onChange={ reminderHandler }
                />
            </label>
            <label className="w-1/2 my-2 text-center">
                <input type="submit" value="Add new task" 
                    className="bg-blue-300 text-sm hover:bg-blue-400 active:bg-blue-400 px-2 py-1 rounded text-slate-500 hover:text-black" />
            </label>
        </form>
    </>);
}
