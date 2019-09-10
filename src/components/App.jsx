import React from 'react';
import TicketList from './TicketList';


import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterPostList: []
        };
        this.handleAddingNewPostList = this.handleAddingNewPostList.bind(this);


    }

    handleAddingNewPostList(newPost) {
        var newMasterPostList = this.state.masterPostList.slice();
        newMasterPostList.push(newPost);
        this.setState({ masterPostList: newMasterPostList });
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' render={() => <PostList postList={this.state.masterPostList} />} />
                </Switch>
            </div>
        )
    }

}

export default App;