import React from 'react'
import Button from '../Button'
import './Login.css'

export default function Login() {
  return (
    <div>
        <div className='log-container'>
         <div className='h-p-container'>
            <h2>Get early acces today</h2>
            <p>It only take aminute to sign up and our free tier  y extremelly generous if you have any questions, our support team would be happy to help you</p>
         </div>
         <div className='input-container'>
            <input type="text" name="" id="" />
            <Button text= 'Get started for free'/>
         </div>
        </div>
    </div>
  )
}
