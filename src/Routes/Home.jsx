import React, { useContext } from 'react'
import Card from '../Components/Card'
import Dentists from '../Components/Dentist'
import { ContextGlobal } from '../Components/utils/global.context'

const Home = () => {
  const { state } = useContext(ContextGlobal)
  const { theme } = state

  return (
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className='card-grid'>
        <Dentists></Dentists>
      </div>
    </main>
  );
};

export default Home