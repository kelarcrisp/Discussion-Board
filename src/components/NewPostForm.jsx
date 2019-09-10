import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {
    let _userName = null;
    let _postTitle = null;
    let _postBody = null;

    function handleNewPostFormSubmission(event) {
        event.preventDefault();
        props.onNewPostCreation({ userName: _userName.value, postTitle: _postTitle.value, postBody: _postBody.value, upVote: 0, downVote: 0, id: v4() });
        _userName.value = '';
        _postTitle.value = '';
        _postBody.value = '';
    }

    return (
        <div>
            <form onSubmit={handleNewPostFormSubmission}>
                <input
                    type='text'
                    id='userName'
                    placeholder='User Name'
                    ref={(input) => { _userName = input; }} />
                <input
                    type='text'
                    id='postTitle'
                    placeholder='Title of Post'
                    ref={(input) => { _postTitle = input; }} />
                <input
                    type='text'
                    id='postBody'
                    placeholder='Body of Post'
                    ref={(input) => { _postBody = input; }} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

NewPostForm.propTypes = {
    onNewPostCreation: PropTypes.func
};

export default NewPostForm;
