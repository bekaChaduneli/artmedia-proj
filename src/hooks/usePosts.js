import axios from "axios";
import { useEffect, useState } from "react";

function usePosts(link) {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        axios.get(link).then((res) => {
            setPosts(res.data);
        });
    }, [link]);

    if (!posts) return null;

    return posts;
}
export default usePosts;
