import React from 'react';
import homePage from './Screens/HomePage';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AllBlogs from './Screens/Blogs';
import SingleBlog from './Screens/SingleBlog';


function App() {
  return (
    <BrowserRouter>
    <div>
      <center><h1><Link to = '/'>Welcome!</Link></h1></center>
      <hr/>
      <div>
        <Switch>
          <Route exact path='/' component = {homePage}></Route>
          <Route exact path='/blog' component = {AllBlogs}></Route>
          <Route exact path='/blogs/:id' component = {SingleBlog}></Route> 
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
