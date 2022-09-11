import React, { useState, useEffect, memo } from "react";

type EmaiElementProps = {
    emailValue: (str: string)=>void;
}

const EmailElement:React.FunctionComponent<EmaiElementProps> = ({ emailValue })=>{
    const [email, setEmail] = useState<[string, boolean]>(['', false]);
    console.log("Email");
    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        /*eslint-disable */
        const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        /*eslint-enable */
        //Correct email
        if(e.target?.value && e.target.value.match(isValidEmail)){
            setEmail(email => {
                const arr:[string, boolean] = [...email ]; 
                arr[0] = e.target.value;
                arr[1] = false; 
                return arr; 
            });
        }else{// Incorrect email
            setEmail(email => {
                const arr:[string, boolean] = [...email ]; 
                arr[0] = e.target.value;
                arr[1] = arr[0].length === 0 ? false : true; 
                return arr; 
            });
        }
    }
    useEffect(()=>{
        if(!email[1]){
            emailValue(email[0]);
        }else{
            emailValue('');
        }
    }, [email, emailValue]);

    return (<React.Fragment>
        <label className="mt-2 mb-4"
            style={ email[1] ? { color: 'red'} : {} }
        >Email address
            <input type="email" className="ml-2 px-2" value={ email[0] } 
                onChange={ handleEmail } />
        </label>
    </React.Fragment>);
}

export default memo(EmailElement);