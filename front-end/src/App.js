// Dependency import
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Local imports
import Title from './components/common/Title';
import HeaderButtons from './components/HeaderButtons';
import CreateButton from './components/CreateButton';
import RootView from './containers/RootView';
import CategoryView from './containers/CategoryView';
import CreatePost from './containers/CreatePost';
import PostDetailView from './containers/PostDetailView';
import CreateEditView from './containers/CreateEditView';
import { fetchCategories } from './actions';
import './App.css';

class ReadableApp extends React.Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Title name="Readable" />
          <HeaderButtons />
          <div className="button-bar">
            <CreateButton />
          </div>
          <Switch>
            <Route exact path="/" component={RootView} />
            <Route exact path="/category" component={CategoryView} />
            <Route exact path="/create" component={CreatePost} />
            <Route exact path="/postDetail" component={PostDetailView} />
            <Route exact path="/createEdit" component={CreateEditView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ cat }) => ({ cat });

export default connect(mapStateToProps, { fetchCategories })(ReadableApp);
