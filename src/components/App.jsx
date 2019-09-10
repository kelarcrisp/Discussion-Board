import React from 'react';
import PostList from './PostList';


import { Switch, Route } from 'react-router-dom';

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
                dffdfd
                <Switch>
                    <Route exact path='/' render={() => <PostList postList={this.state.masterPostList} />} />
                </Switch>
            </div>
        )
    }

}

export default App;