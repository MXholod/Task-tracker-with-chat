import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import EmailElement from './../components/form_elements/EmailElement';
import PasswordElement from './../components/form_elements/PasswordElement';
import { MdOutlineFmdBad } from 'react-icons/md';

interface IFormState{
    userName: string;
    email: string;
    password: string;
    passwordConfirm: boolean;
}

export const Signup:React.FC = ()=>{
    const [formData, setFormData] = useState<IFormState>({ 
        userName: '', email: '', password: '', passwordConfirm: false
    });
    const [userNameerror, setUserNameError] = useState<boolean>(false);

    const handleForm = (e:React.FormEvent<HTMLFormElement>):void=>{
        e.preventDefault();
        const { userName, email, password, passwordConfirm } = formData;
        if(!userNameerror && userName !== '' &&  email !== '' &&  password !== '' &&  passwordConfirm){
            console.log("The form data is correct");
        }else{
            console.log("The form data is incorrect!!!");
        }
    }
    const userNameHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let userName:string = e.target.value.trim();
        setFormData((data)=>{
            return { ...data, userName }
        });
    }
    const emailValue = useCallback( (val:string):void=>{
        if(val.length > 0){
            setFormData((data)=>{
                return { ...data, email: val };
            });
        }else{
            setFormData((data)=>{
                return { ...data, email: '' };
            });
        }
    },[]);
    const passwordValue = useCallback( (val:string):void=>{
        if(val.length > 0){
            setFormData((data)=>{
                return { ...data, password: val };
            });
        }else{
            setFormData((data)=>{
                return { ...data, password: '' };
            });
        }
    },[]);
    const passwordValueConfirm = useCallback( (val:string):void=>{
        if(!!val.length){//If not empty
            if(formData.password !== '' && formData.password === val){
                setFormData((data)=>{
                    return { ...data, passwordConfirm: true };
                });
            }else{
                setFormData((data)=>{
                    return { ...data, passwordConfirm: false };
                });
            }
        }else{
            setFormData((data)=>{
                return { ...data, passwordConfirm: false };
            }); 
        }
    },[formData.password]);
    // Memoize children
    const inChildren = useMemo(()=>{
        return (<span>Password confirmation 
            { formData.password !== '' && !formData.passwordConfirm && <MdOutlineFmdBad className='inline text-lg text-orange-600 ml-2' /> }
        </span>);
    },[formData.password, formData.passwordConfirm]);
    useEffect(()=>{
        if(formData.userName.length >= 3){
            setUserNameError(s => false);
        }
    },[formData.userName]);
    return (<div className="w-2/4 mx-auto p-8">
        <h3 className="font-bold pl-2 pb-2">Sign up</h3>
        <form onSubmit={ handleForm } className="flex flex-col p-4 bg-gray-100">
            <label className={ userNameerror ? 'text-red-600' : '' }>User name
                <input type="text" onChange={ userNameHandler } value={ formData.userName } 
                    className="ml-[2%] px-2"
                    onBlur={ (e:React.FocusEvent<HTMLInputElement>)=>{ 
                        if(formData.userName.length < 3){
                            setUserNameError(s => true);
                        }
                     } }
                />
            </label>
            <EmailElement emailValue={ emailValue } />
            <PasswordElement 
                charLength={ 7 } 
                passwordValue={ passwordValue }
            />
            <PasswordElement 
                charLength={ 7 } 
                passwordValue={ passwordValueConfirm }
            >
                { inChildren }
            </PasswordElement>
            <label>
                <input type="submit" value="Sign up"
                className="rounded border border-solid border-black w-24 hover:bg-gray-300 active:bg-gray-300 hover:cursor-pointer active:cursor-pointer" />
            </label>
        </form>
        <p className="ml-[60%] mt-[-5%] text-sky-600">
            <span className="text-sm text-black mr-1">Already have an account?</span>  
            {<NavLink to='/signin'>Sign in</NavLink>}
        </p>
    </div>);
}