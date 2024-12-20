import React from 'react'
import { SignIn } from '@clerk/nextjs'

const page = () => {
    return (
        <div className='w-full flex justify-center'>
            <SignIn afterSignOutUrl='/dashboard' />
        </div>
    )
}

export default page