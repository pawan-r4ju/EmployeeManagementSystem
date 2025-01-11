import React, { useState, useEffect } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  console.log(props);

  const [username, setUsername] = useState('')

  useEffect(() => {
    if (props.data) {
      setUsername(props.data.firstName)
      setLocalStorage('username', props.data.firstName)
    } else {
      setUsername('Admin')
      setLocalStorage('username', 'Admin')
    }
  }, [props.data])

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl'>{username}</span></h1>
      <button onClick={logOutUser} className='text-red-500'>Log out</button>
    </div>
  )
}

export default Header