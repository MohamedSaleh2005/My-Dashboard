import React from 'react'

export default function JoinUs() {
    return (
        <div className='Special flex items-center justify-between mt-4 px-4 py-3  rounded-xl shadow-sm border border-white/10'>
            <span className="MyFont">Let's access your account</span>

            <div className='flex gap-3'>
                <button className='cursor-pointer transition-all duration-300 hover:scale-95'>Login</button>
                <span>|</span>
                <button className='cursor-pointer transition-all duration-300 hover:scale-95'>Register</button>
            </div>
        </div>
    )
}
