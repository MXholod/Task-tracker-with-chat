import React, { useState, useEffect, memo } from 'react';

type PasswordElementProps = {
    charLength: number;
    passwordValue: (str:string)=>void
}

const PasswordElement:React.FunctionComponent<PasswordElementProps> = ({ charLength, passwordValue }: PasswordElementProps)=>{
    const [password, setPassword] = useState<[string, boolean]>(['', false]);
    console.log("Password");
    const handlePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value.length >= charLength){// Correct password length
            setPassword(pass =>{
                const arr:[string, boolean] = [e.target.value, false];
                return arr;
            });
        }else{// Incorrect password length
            setPassword(pass =>{
                let style = e.target.value.length === 0 ? false : true;
                const arr:[string, boolean] = [e.target.value, style];
                return arr;
            });
        }
    }

    useEffect(()=>{
        if(!password[1]){
            passwordValue(password[0]);
        }else{
            passwordValue('');
        }
    },[password, passwordValue]);

    return (<React.Fragment>
        <label className="mb-4"
            style={ password[1] ? { color: 'red'} : {} }
        >Password
            <input type="password" className="ml-2 px-2" value={ password[0] }
                onChange={ handlePassword } />
        </label>
    </React.Fragment>);
}

export default memo(PasswordElement);