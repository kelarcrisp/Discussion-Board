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
        this.setState({ upvotes: temp++ });
    }

    handleDownvote() {
        var temp = this.state.downvotes;
        this.setState({ downvotes: temp++ });
    }

    render() {
        return (
            <div>
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

Post.propTypes = {
    userName: PropTypes.string,
    postTitle: PropTypes.string,
    postBody: PropTypes.string
}

export default Post;