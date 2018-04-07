// Dependency import
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
      <BrowserRouter>
        <div>
          {/* <Header title="Readable" /> */}
          <Switch>
            <Route exact path="/" component={RootView} />
            <Route pexact path="/category" component={CategoryView} />
            <Route exact path="/postDetail" component={PostDetailView} />
            <Route exact path="/createEdit" component={CreateEditView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default ReadableApp;
