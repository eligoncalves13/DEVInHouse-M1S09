import { useState } from 'react';
import './App.css';
import UserData from './UserData';

function App() {
  const [favoriteMovie, setFavoriteMovie] = useState('Matrix');
  const [isActive, setActive] = useState(false);
  
  const handleFavoriteMovie = () => {
    setActive(!isActive);
    if(isActive === false){
      setFavoriteMovie('Pulp Fiction');
    } else {
      setFavoriteMovie('Matrix');
    }
  }

  return (
  <>
    <UserData
      name="Élida"
      city="Joinville"
      age={26}
      favoriteMovie={favoriteMovie}
      onClick={handleFavoriteMovie}
    />
  </>
  );
}

export default App;
