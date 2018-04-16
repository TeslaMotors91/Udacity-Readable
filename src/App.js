// Dependency import
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Local imports
import Title from './components/common/Title';
import HeaderButtons from './components/HeaderButtons';
import RootView from './containers/RootView';
import CategoryView from './containers/CategoryView';
import PostDetailView from './containers/PostDetailView';
import CreateEditView from './containers/CreateEditView';
// import logo from './logo.svg';
import './App.css';

class ReadableApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: true };
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Title name="Readable" />
          <HeaderButtons />
          <div>
            <a style={{ fontSize: 15 }}> Sort By </a>
            <input type="checkbox" checked={this.state.isChecked} onChange={this.toggleChange} />
            <a style={{ fontSize: 15 }}> Date </a>
            <input type="checkbox" checked={!this.state.isChecked} onChange={this.toggleChange} />
            <a style={{ fontSize: 15 }}> Score </a>
          </div>
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
