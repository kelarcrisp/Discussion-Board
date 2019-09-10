import React from 'react';
import PostList from './PostList';
import NewPostForm from './NewPostForm';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingNewPostList = this.handleAddingNewPostList.bind(this);


    }

    handleUpVotingPost(id) {
        this.setState({ upVote: +1 });
    }
    handleDownVotingPost(id) {
        this.setState({ downVote: +1 });
    }
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
                    <Route exact path='/' />
                    <Route exact path='/PostList' render={() => <PostList postList={this.state.masterPostList} />} />
                    <Route exact path='/NewPost' render={() => <NewPostForm onNewPostCreation={this.handleAddingNewPostList} />} />
                </Switch>
            </div>
        )
    }

}

export default App;