import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Error404 from './Error404';
class App extends React.Component {
    ///masterPostList that conains all of the posts that are made
    constructor(props) {
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingNewPostList = this.handleAddingNewPostList.bind(this);


    }

    ///making the duplicate of the post to populate into masterPostList
    handleAddingNewPostList(newPost) {
        var newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.push(newPost);
        this.setState({ masterPostList: newMasterPostList });
    }
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    {/* Routes that are accessible */}
                    <Route exact path='/' />
                    <Route exact path='/PostList' render={() => <PostList postList={this.state.masterPostList} />} />
                    <Route exact path='/NewPost' render={() => <NewPostForm onNewPostCreation={this.handleAddingNewPostList} />} />
                    <Route component={Error404} />
                </Switch>
            </div>
        )
    }

}

export default App;