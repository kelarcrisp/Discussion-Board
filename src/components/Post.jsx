import React from 'react';
import PropTypes from 'prop-types';

const Post = (props) => {
    return (
        <div>
            <h4>{props.userName}</h4>
            <h4>{props.postTitle}</h4>
            <h4>{props.postBody}</h4>

        </div>
    )
}

Post.propTypes = {
    userName: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
    postBody: PropTypes.string.isRequired
}

export default Post;