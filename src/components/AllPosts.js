import usePosts from "@/hooks/usePosts";
import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts() {
    const [skips, setSkips] = useState("?limit=10&skip=0");
    let links = `https://dummyjson.com/posts${skips}`;
    let posts = usePosts(links);
    const users = usePosts("https://dummyjson.com/users?limit=150");
    let pags = [];

    for (let i = 0; i < posts?.total / posts?.limit; i++) {
        pags.push({
            id: i + 1,
            link: `?limit=10&skip=${i * 10}`,
        });
    }

    return (
        <>
            <div className="flex gap-[12px] mb-[60px] flex-wrap">
                {posts?.posts.map((post, index) => {
                    let link = {
                        href: `user/${post?.userId}`,
                        image: users?.users[[post?.userId]].image,
                        firstName: users?.users[[post?.userId]]?.firstName,
                        lastName: users?.users[[post?.userId]]?.lastName,
                    };
                    return <Post key={index} post={post} link={link} />;
                })}
            </div>
            <div className="flex gap-[20px] justify-center">
                {pags?.map((pag) => {
                    return (
                        <button
                            key={pag.id}
                            className="text-black"
                            onClick={() => setSkips(`${pag.link}`)}
                        >
                            {pag.id}
                        </button>
                    );
                })}
            </div>
        </>
    );
}
