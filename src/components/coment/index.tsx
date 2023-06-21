import React from 'react';

import "./style.css"


interface CommentProps {
    comment: {
        body: string;
        id: number;
        postId: number;
        user: { id: number, firstName: string, lastName: string }
    }
    onClick: () => void;
}

export const Comment: React.FC<CommentProps> = ({comment, onClick}) => {

    const firstNameLetter = comment.user.firstName.substring(0, 1).toUpperCase()
    const lastNameLetter = comment.user.lastName.substring(0, 1).toUpperCase()

    return (
        <div className={"comment__wrapper"}>
            <div className={"comment__header"}>
                <h3 className={"header_h3"}>
                    {firstNameLetter}{lastNameLetter}
                </h3>
                <p className={"header_p"}>{comment.user.firstName}{comment.user.lastName}</p>
            </div>
            <div className={"comment_body"}>
                <p>{comment.body}</p>
            </div>
            <button className={"close"} onClick={onClick}>x</button>
        </div>
    );
};

