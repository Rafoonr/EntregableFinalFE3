import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContext(ContextGlobal)
  const { theme } = state

  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <div className='formContainer'>
        <h2>Want to know more?</h2>
        <p className='formDescription'>Send us your questions and we will contact you</p>
        <Form />
      </div>
    </main>
  )
}

export default Contact