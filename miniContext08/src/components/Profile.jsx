import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user}=useContext(UserContext)// extracting the data from UserContext

    if(!user) return <h1>Not logged in!</h1>
  return (
    <div>
      Profile:{user.username}

      <h1>More Components</h1>
    </div>
  )
}

export default Profile
