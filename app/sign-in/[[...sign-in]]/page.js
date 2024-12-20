import React from 'react'
import { SignUp } from '@clerk/nextjs'

const Login = () => {
    return (
        <div className='flex w-full justify-center'>
            <SignUp afterSignOutUrl='/dashboard'/>
        </div>
    )
}

export default Login