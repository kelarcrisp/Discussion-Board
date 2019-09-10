import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
//setting each input value to null to have them available for when we take the value from the form
function NewPostForm(props) {
    let _userName = null;
    let _postTitle = null;
    let _postBody = null;


    //creating a new post and clearing out the input form when submitted 
    function handleNewPostFormSubmission(event) {
        event.preventDefault();
        props.onNewPostCreation({ userName: _userName.value, postTitle: _postTitle.value, postBody: _postBody.value, upVote: 0, downVote: 0, id: v4() });
        _userName.value = '';
        _postTitle.value = '';
        _postBody.value = '';
    }

    return (
        //ref is being used as a reference to store the data in _username and so on 
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
