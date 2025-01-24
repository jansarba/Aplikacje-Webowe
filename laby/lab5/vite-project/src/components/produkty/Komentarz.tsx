import { useState } from "react";

export type komentarzProps = {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: User;
};

type User = {
    id: number;
    userName: string;
    fullName: string;
};

export const Komentarz = (props: komentarzProps) => {
    const [likes, setLikes] = useState(props.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);


    const like = (status: number) => { // na pewno to mozna lepiej zrobic!
        if (status === 1) {
            if (isLiked) {
                setLikes(likes - 1);
                setIsLiked(false);
            } 
            else if (isDisliked) {
                setLikes(likes + 2);
                setIsLiked(true);
                setIsDisliked(false);
            } else {
                setLikes(likes + 1);
                setIsLiked(true);
            }
        } else {
            if (isLiked) {
                setLikes(likes - 2);
                setIsDisliked(true);
                setIsLiked(false);
            } 
            else if (isDisliked) {
                setLikes(likes + 1);
                setIsDisliked(false);
            } else {
                setLikes(likes - 1);
                setIsDisliked(true);
            }
        }
    };

    const disliked = () => {like(-1)}
    const liked = () => {like(1)}

    return (
        <div className="komentarz">
            <h2>Komentarz {props.id}</h2>
            <p>{props.body}</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
            <p>
                User: {props.user.userName} ({props.user.fullName})
            </p>
            <p>Post ID: {props.postId}</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <button onClick={liked} id="like" className={isLiked ? "checked" : ""}>Like</button>
                <div style={{ width: "3ch", textAlign: "center" }}>{likes}</div>
                <button onClick={disliked} id="dislike" className={isDisliked ? "checked" : ""}>Dislike</button>
            </div>
        </div>
    );
}