import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import NotFound from './pages/NotFound'

export default function App () {
  const [modal, setModal] = useState('')

  return (
    <div className='app'>
      <Routes>
        <Route index element={<Navigate replace to='/login' />} />
        <Route path='/login' element={<Login setModal={setModal} />} />
        <Route path='/logged-in' element={<Main />} />
        <Route path='/logged-in/:conversationId' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      {modal === 'new-user' ? (
        <div className='modal-wrapper'>
          <div className='modal'>
            <h1>New user modal</h1>
          </div>
        </div>
      ) : null}

      {modal === 'something-else' ? (
        <div className='modal-wrapper'>
          <div className='modal'>
            <h1>Something else</h1>
          </div>
        </div>
      ) : null}
    </div>
  )
}
