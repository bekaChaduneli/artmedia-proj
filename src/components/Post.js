import Link from "next/link";
import React from "react";

export default function Post({ post, link }) {
    return (
        <div key={post.id} className="shadow-sm max-w-[460px]">
            <div className="bg-gray-400 h-[270px]"></div>
            <div className="p-5">
                <h2 className="mb-[12px] text-[20px] text-black">
                    {post.title}
                </h2>
                <Link
                    href={link.href}
                    key={post?.userId}
                    className="flex gap-[11px] items-center mb-[18px]"
                >
                    <figure className="w-[34px] h-[34px] rouneded-full">
                        <img className="" src={link.image} />
                    </figure>{" "}
                    <h3>
                        {link.firstName} {link.lastName}
                    </h3>
                </Link>
                <div>
                    <p>{post.body}</p>
                </div>
            </div>
        </div>
    );
}
