"use client";
import AllPosts from "@/components/AllPosts";
import usePosts from "@/hooks/usePosts";
import axios from "axios";
import Image from "next/image";

export default function Home() {
    return <AllPosts />;
}
