import React from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './componats/homePage/Home';
import Hedder from './componats/hedder/Hedder';
import Add from './componats/addprodects/Add';
import All from './componats/allProdacts/AllProdects';
import EditProdect from './componats/editProdet/EditProdect.';

function App() {
  return (
    <div className="App">
    {/* <Hedder/>
     <Home/>
     <Add/> */}

     <Router>
     <Hedder/>
     <Switch>
     
     <Route path="/" exact component={Home} />
     <Route path="/home" exact component={Home} />
     <Route path="/addProdect" component={Add} />
     <Route path="/AllProdects" component={All} />
     <Route path="/EditProdect/:id" component={EditProdect} />


     </Switch>

     </Router>
    </div>
  );
}

export default App;
