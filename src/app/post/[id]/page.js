"use client";
import BigPost from "@/components/BigPost";
import Post from "@/components/Post";
import usePosts from "@/hooks/usePosts";
import Link from "next/link";
import { useEffect } from "react";

const SinglePost = ({ params }) => {
    const post = usePosts(`https://dummyjson.com/posts/${params.id}`);
    const users = usePosts("https://dummyjson.com/users?limit=150");
    let link = {
        href: `user/${post?.userId}`,
        image: users?.users[[post?.userId]].image,
        firstName: users?.users[[post?.userId]]?.firstName,
        lastName: users?.users[[post?.userId]]?.lastName,
    };
    return (
        <>
            <div className="flex gap-[12px] flex-wrap">
                <BigPost post={post} link={link} />;
            </div>
        </>
    );
};

export default SinglePost;
