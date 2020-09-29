import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './componats/homePage/Home';
import Hedder from './componats/hedder/Hedder';
import Add from './componats/addprodects/Add';
import All from './componats/allProdacts/AllProdects';

function App() {
  return (
    <div className="App">
    {/* <Hedder/>
     <Home/>
     <Add/> */}

     <Router>
     <Hedder/>
     <Route path="/" exact component={Home} />
     <Route path="/addProdect" component={Add} />
     <Route path="/AllProdects" component={All} />

     </Router>
    </div>
  );
}

export default App;
