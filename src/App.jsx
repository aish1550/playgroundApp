import { useContext } from 'react';
import Toolbar from './components/Toolbar';
import { useUserContext } from './hooks/useUserContext';

export const App = () => {
  const userContext = useUserContext();

  const renderLoggedOutState = () => {
    return (
      <div>
        <h1>Please log in</h1>
      </div>
    )
  }

  const renderLoggedInState = () => {
    return (
      <div>
        <h1>Welcome, {userContext.user.name}!</h1>
        <p>Age: {userContext.user.age}</p>
      </div>
    )
  };

  return (
    <div>
      {!userContext.user || !userContext.user.isLoggedIn ? renderLoggedOutState() : renderLoggedInState()}
    </div>
  )
}

export default App