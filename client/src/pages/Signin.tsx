import React, { useState, useCallback } from "react";
import { NavLink } from 'react-router-dom';
import EmailElement from './../components/form_elements/EmailElement';
import PasswordElement from './../components/form_elements/PasswordElement';

interface IFormData{
    email: string;
    password: string;
    rememberMe: boolean;
}

export const Signin:React.FC = ()=>{
    const [formData, setFormData] = useState<IFormData>({
        email: '', password: '', rememberMe: false
    });

    const handleForm =(e: React.FormEvent)=>{
        e.preventDefault();
        if(formData.email !== '' && formData.password !== ''){
            console.log("Submit ",formData);
        }else{
            console.log("Not all fields are filled");
        }
    }
    //Email value to the state
    const emailValue = useCallback( (val:string):void=>{
        if(!!val.length){
            setFormData(data => {
                return { ...data, email: val }
            });
        }else{
            setFormData(data=>{
                return { ...data, email: '' }
            });
        }
    }, [setFormData]);
    //Password value to the state
    const passwordValue = useCallback( (val: string)=>{
        if(!!val.length){
            setFormData(data => {
                return { ...data, password: val }
            });
        }else{
            setFormData(data=>{
                return { ...data, password: '' }
            });
        }
    }, [setFormData]);

    const handleRememberMe = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        setFormData(data => ({ 
          ...data, rememberMe: e.target.checked
        }));
    }

    return (<div className="w-2/4 mx-auto p-8">
        <h3 className="font-bold pl-2 pb-2">Sign in</h3>
        <form onSubmit={ handleForm } className="flex flex-col p-4 bg-gray-100">
            <EmailElement emailValue={ emailValue } />
            <PasswordElement 
                charLength={ 7 }
                passwordValue={ passwordValue }
            />
            <label className="mb-4">Remember me
                <input type="checkbox" className="ml-2" 
                    onChange={ handleRememberMe }
                />
            </label>
            <input type="submit" value="Sign in" 
                className="rounded border border-solid border-black w-24 hover:bg-gray-300 active:bg-gray-300" />
        </form>
        <p className="ml-[60%] mt-[-5%] text-sky-600">
            <span className="text-sm text-black">Don't have an account? </span>  
            {<NavLink to='/signup'>Sign up</NavLink>}
        </p>
    </div>);
}