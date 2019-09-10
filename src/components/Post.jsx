import React from 'react';
import PropTypes from 'prop-types';


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upvotes: 0,
            downvotes: 0
        };
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote() {
        var temp = this.state.upvotes;
        this.setState({ upvotes: temp + 1 });
    }

    handleDownvote() {
        var temp = this.state.downvotes;
        this.setState({ downvotes: temp + 1 });
    }



    render() {
        return (
            <div style={cardStyle}>
                <h4>{this.props.userName}</h4>
                <h4>{this.props.postTitle}</h4>
                <h4>{this.props.postBody}</h4>
                <h4>{this.state.upvotes}</h4>
                <h4>{this.state.downvotes}</h4>
                <button onClick={() => { this.handleUpvote(); }}>Upvote</button>
                {/* Upvote count */}
                <button onClick={this.handleDownvote}>Downvote</button>
                {/* Downvote count */}

            </div>
        )
    }
}
var cardStyle = {

    backgroundColor: 'darkgray',
    width: '90%',
    height: '300px',
    overflow: 'auto',
    border: '2px solid black'

}


Post.propTypes = {
    userName: PropTypes.string,
    postTitle: PropTypes.string,
    postBody: PropTypes.string
}

export default Post;