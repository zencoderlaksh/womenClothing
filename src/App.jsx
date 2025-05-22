import React, { useEffect, useState } from 'react'
import {BarLoader, BeatLoader, ClockLoader, HashLoader, PacmanLoader, PuffLoader, RingLoader, ScaleLoader, } from 'react-spinners';
import AppRoutes from './Routes/AppRoutes'
import Home from './pages/Home/Home';

function App() {

  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 4000);
  })
  return (
    <>
      {loading ? (
        <div className='flex items-center justify-center h-[100vh]'>
          <HashLoader loading={true} color="#5A6D57" size={50} />
        </div>
      ) : (
      <AppRoutes />
      )}
    </>
  );

}

export default App
