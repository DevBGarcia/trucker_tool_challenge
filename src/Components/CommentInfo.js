import React from 'react';

/**
 *   
 * @param { comment } props 
 * @returns Logic to detect comments from the data entry, displays alternate text ModalLoadCard if empty. 
 */

const CommentInfo = (props) => {

    let commentTag = props.comment;
    if(props.comment===""){
        commentTag = <span className="text-muted">No additional comments have been provided.</span>;
    }

    return(
        <div>
        <label><h6>Comment Section:</h6></label>
            <div className="shadow-none p-3 mb-3 bg-light rounded">{commentTag}</div>
        </div>
    )    
}

export default CommentInfo;