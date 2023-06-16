import usePosts from "@/hooks/usePosts";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Comments({ post, rerender }) {
    const [skips, setSkips] = useState(2);
    let links = `https://dummyjson.com/comments/post/${skips}`;
    let comments = usePosts(links);

    const reloadComments = (comment) => {
        axios
            .delete(`https://dummyjson.com/comments/${comment.id}`)
            .then((res) => res.data)
            .then(console.log);
    };
    useEffect(() => {
        post?.post?.id && setSkips(post?.post?.id);
        console.log("asf");
    }, [post, skips, rerender]);

    return (
        <>
            {comments?.comments.map((comment) => {
                return (
                    <div
                        key={comment.id}
                        className="w-full p-[26px] bg-gray-300 mb-[20px]"
                    >
                        <div className="flex items-center bg-transparent mb-[20px] justify-between">
                            <h3 className="text-[14px]">
                                {comment.user.username}
                            </h3>
                            <figure onClick={() => reloadComments(comment)}>
                                <Close />
                            </figure>
                        </div>
                        <div>
                            <p className="text-[14px]">{comment.body}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

function Close() {
    return (
        <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                x1="0.353553"
                y1="0.646447"
                x2="7.35355"
                y2="7.64645"
                stroke="black"
            />
            <line
                x1="7.35355"
                y1="0.353553"
                x2="0.353553"
                y2="7.35355"
                stroke="black"
            />
        </svg>
    );
}
