import './App.css';

import { Header } from './components/Layout/Header';
import { BrowserRouter as Router }  from 'react-router-dom'
import { MainRoutes } from './Routes/Routes';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './redux/actions/fetchBooks';

function App() {
  const dispatch = useDispatch();
  

  useEffect(function(){
    dispatch(fetchBooks())
  },[dispatch])

  return (
    <Router>
      <Header/>
     
        <MainRoutes/>
     
    </Router>
  );
}

export default App;
