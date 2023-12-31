import Link from "next/link";
import React, { useState } from "react";
import AddComment from "./AddComment";
import Comments from "./Comments";

export default function BigPost({ post, link }) {
    const [rerender, setRerender] = useState(false);
    return (
        <div className="w-full">
            <div className="w-full h-[646px] bg-gray-300 mb-[36px]" />
            <h1 className="text-[34px] text-black font-bold mb-[20px]">
                {post?.title}
            </h1>
            <Link
                href={`/${link.href}`}
                key={post?.userId}
                className="flex gap-[11px] items-center mb-[34px]"
            >
                <figure className="w-[34px] h-[34px] rouneded-full">
                    <img className="" src={link.image} />
                </figure>{" "}
                <h3>
                    {link.firstName} {link.lastName}
                </h3>
            </Link>
            <div className="mb-[45px]">
                <p className="text-black text-[14px]">{post?.body}</p>
            </div>
            <Comments
                rerender={rerender}
                setRerender={setRerender}
                post={post}
            />
            <AddComment setRerender={setRerender} post={post} />
        </div>
    );
}
