import React,{useState,useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Navbar from './components/layouts/Navbar';
import Repos from './components/Repos/Repos';
import RepoState from './context/Repository/RepoState';
import BookMarks from './components/Bookmarks/BookMarks';
import BookMarkState from './context/BookMarks/BookMarkState';
function App() {
  const [state, setstate] = useState(null)
  useEffect(()=>{
    M.AutoInit();
  },[])




  return (
    <RepoState>
      <BookMarkState>
    <div>
      <Navbar></Navbar>
    <div  className="row">
      <div className="col s7">
        <Repos></Repos>
      </div>
      <div  className="col s5">
        <BookMarks style ={{"positon":"relative"}}/>
      </div>
    </div>
    </div>
    </BookMarkState>
    </RepoState>
  );
}

export default App;
