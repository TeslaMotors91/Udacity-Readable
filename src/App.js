// Dependency import
import React from 'react';
import { Route } from 'react-router-dom';

// Local imports
import RootView from './containers/RootView';
import CategoryView from './containers/CategoryView';
import PostDetailView from './containers/PostDetailView';
import CreateEditView from './containers/CreateEditView';
// import logo from './logo.svg';
import './App.css';

class ReadableApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={RootView} />
        <Route path="/category" component={CategoryView} />
        <Route path="/postDetail" component={PostDetailView} />
        <Route path="/createEdit" component={CreateEditView} />
      </div>
    );
  }
}

export default ReadableApp;
