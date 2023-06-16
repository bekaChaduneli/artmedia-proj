import Link from "next/link";
import React from "react";

export default function BigPost({ post, link }) {
    console.log(post);
    return (
        <div>
            <div className="w-full h-[646px] bg-gray-300 mb-[36px]" />
            <h1 className="text-[34px] text-black font-bold mb-[20px]">
                {post?.title}
            </h1>
            <Link
                href={link.href}
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
        </div>
    );
}
