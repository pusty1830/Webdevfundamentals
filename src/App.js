import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Fotter from './components/Fotter';
import Main from './components/Main';
import Addition from './components/Addition'


function App() {
  return (
    <div className="App">
       <Router>
         <Navbar/>
          <Routes>
             <Route path='/' element={<Main/>}/>
             <Route path='/add' element={<Addition/>}/>
          </Routes>
          <Fotter/>
       </Router>
    </div>
  );
}

export default App;
