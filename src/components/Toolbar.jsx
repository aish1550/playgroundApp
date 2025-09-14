import React from 'react'
import { useUserContext } from '../hooks/useUserContext';

const Toolbar = () => {
    const userContext = useUserContext();

  return (
    <div style={{ padding: '10px', borderBottom: '1px solid #eee', backgroundColor: "red", color: "white" }}>
        
        {!userContext.user || !userContext.user.isLoggedIn ? (
          <button onClick={userContext.handleLogin}>Login</button>
        ) : (
          <button onClick={userContext.handleLogout}>Logout</button>
        )}
    </div>
  )
}

export default Toolbar