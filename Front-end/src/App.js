import './App.css';
import ManagePosts from './pages/admin/ManageItems';
import Nav from './components/Nav';
import UpdatePost from './pages/admin/UpdateItem';
import CreatePost from './pages/admin/CreateItem';
import ShowList from './pages/Items';
import ShowPost from './pages/Item';

import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      {/* Router enables component to use the routing capabilities  */}
      <Router>
          <Nav />

          {/* Switch ensures that only 1 component renders. Stop rendering other components as soon as it gets a match */}
          <Switch>
            {/* Route associates a path with a specific component */}
            <Route path="/items" component={ShowList} />
            <Route path="/item/:id" component={ShowPost} />
            <Route path="/manage-items" component={ManagePosts} />
            <Route path="/create-item" component={CreatePost} />
            <Route path="/update-item/:id" component={UpdatePost} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
