import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Layout/Navbar';
import Add from './Components/User/Add';
import Show from './Components/User/Show';
import Update from './Components/User/Update';
import Delete from './Components/User/Delete';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/User/add' element={<Add/>}/>
      <Route path='/User/show' element={<Show/>}/>
      <Route path='/User/update/:userid/' element={<Update/>}/>
      <Route path='/User/delete/:userid/' element={<Delete/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
