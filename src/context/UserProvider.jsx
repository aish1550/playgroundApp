import { useState, createContext } from 'react'

export const UserContext = createContext(null); // { Provider, Consumer }

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser({ name: "John Doe", age: 30, isLoggedIn: true });
  }

  const handleLogout = () => {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider