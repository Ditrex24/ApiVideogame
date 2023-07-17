import React, { useState, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../src/redux/actions/actions';
import './App.css';

// Importa los componentes
import NavBar from '../src/componentes/navbar/navbar';

// Importa las vistas
import Landing from '../src/componentes/landing/landing';
import Home from '../src/componentes/home/home';
import Detail from '../src/componentes/details/details';

function App() {
  const [visualizar, setVisualizar] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.videogames);

  useEffect(() => {
    if (!visualizar) {
      dispatch(getVideogames());
    }
  }, [dispatch, visualizar]);

  function changeHandler(e) {
    e.preventDefault();
  }

  return (
    <div className='App'>
      <div>
        {(location.pathname !== "/") && <NavBar onChange={changeHandler} />}
      </div>

      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home videogames={data} />} />
      <Route path='/videogame/:id' element={<Detail />} />
    </div>
  );
}

export default App;

