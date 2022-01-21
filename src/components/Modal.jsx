function Modal ({ modal, setModal }) {
  if (modal === 'new-user') {
    return (
      <div className='modal-wrapper'>
        <div className='modal'>
          <h1>New user modal</h1>
        </div>
      </div>
    )
  }

  if (modal === 'start-chat') {
    return (
      <div className='modal-wrapper'>
        <div className='modal'>
          <button className='close-modal' onClick={() => setModal('')}>
            X
          </button>
          <h1>Start chat</h1>
        </div>
      </div>
    )
  }

  return null
}

export default Modal
