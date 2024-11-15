import React from 'react'

const LoginandRegisterModal = ({children}) => {
  return (
    <div>
      <main className='bg-foreground w-full py-20 flex items-center justify-center'>
        {children}
      </main>
    </div>
  )
}

export default LoginandRegisterModal
