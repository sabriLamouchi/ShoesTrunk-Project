import React from 'react';
import './contact.css'
import { Form, redirect, useActionData } from 'react-router-dom';
const Contact = (props) => {
    const actionData=useActionData();
    return (
        <div className='contact'>
        <h2>Contact US</h2>
        <Form method='post' action='/help'>
            <input type='text' name='name' required placeholder='Name'/>
            <input type='text' name='lastname' required placeholder='lastname'/>
            <input type='email' name='mail' required placeholder='e-mail'/>
            <textarea name='message' placeholder='Your message'></textarea>
            <button type='submit'>Submit</button>
            {/* implimentation of  errors */}
            <>
            {actionData && actionData.error && <p>{actionData.error}</p>}
            </>
            
        </Form>

    </div>
    );
};


export const ContactAction=async({request})=>{

    const data=await request.formData();
    const submission={
        name:data.get('name'),
        lastname:data.get("lastname"),
        mail:data.get("mail"),
        message:data.get("message")
    }
    console.log(submission);
    //user post request
    if(submission.message.length<=10){
        return {error:"Enter your message please (message must be at least 10 characters) :)!!"}
    }

    //redirect to Home page:
    return redirect("/shoesTrunk-Project");
}

export default Contact;