import React, { useEffect } from 'react';
import { Route, BrowserRouter, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../../redux/actions/actions';

// Importa los componentes necesarios
import NavBar from '../navbar/navbar';
import Landing from '../landing/landing';
import Home from '../home/home';
import Detail from '../details/details';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector(state => state.videogames);

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  return (
    <div>
      {(location.pathname !== '/') && <NavBar />}
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home videogames={data} />} />
        <Route path="/videogame/:id" element={<Detail />} />
      </Route>
    </div>
  );
}

export default App;
