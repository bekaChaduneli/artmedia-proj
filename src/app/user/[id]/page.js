"use client";
import Post from "@/components/Post";
import usePosts from "@/hooks/usePosts";

const UserProfile = ({ params }) => {
    const users = usePosts(`https://dummyjson.com/users/${params.id}`);
    const posts = usePosts(`https://dummyjson.com/posts/user/${params.id}`);
    return (
        <>
            <div className="flex gap-[21px] items-center mb-[52px]">
                <figure className="w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                    <img src={users?.image} className="w-[100px]" />
                </figure>
                <h1 className="text-[34px] font-bold">
                    {users?.firstName} {users?.lastName}
                </h1>
            </div>
            <div className="flex gap-[12px] flex-wrap">
                {posts?.posts.map((post, index) => {
                    let link = {
                        href: `#`,
                        image: users?.image,
                        firstName: users?.firstName,
                        lastName: users?.lastName,
                    };
                    return <Post key={index} post={post} link={link} />;
                })}
            </div>
        </>
    );
};

export default UserProfile;
