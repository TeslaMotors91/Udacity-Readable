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
import NewPost from './containers/NewPost';
import PostDetailView from './containers/PostDetailView';
import CreateEditView from './containers/CreateEditView';
import { fetchCategories, fetchCategoryPosts } from './actions';
import './App.css';

class ReadableApp extends React.Component {
  componentWillMount() {
    this.props.fetchCategories();
  }
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
          <div className="button-bar">
            <CreateButton />
          </div>
          <Switch>
            <Route exact path="/" component={RootView} />
            <Route exact path="/category" component={CategoryView} />
            <Route exact path="/new" component={NewPost} />
            <Route exact path="/postDetail" component={PostDetailView} />
            <Route exact path="/createEdit" component={CreateEditView} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories, fetchCategoryPosts })(ReadableApp);
