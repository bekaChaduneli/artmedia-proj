import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { commentSchema } from "@/Validations/CommentAuthorValidation";
import axios from "axios";
export default function AddComment({ post, setRerender }) {
    let initialValues = {
        author: "",
        text: "",
    };
    const AddComment = (e) => {
        const postData = {
            body: e.text,
            postId: post.id,
            userId: 4,
        };

        axios
            .post("https://dummyjson.com/comments/add", postData, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .catch((error) => {
                console.error(error);
            })
            .then(setRerender(true));
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={commentSchema}
            onSubmit={AddComment}
        >
            {(formik) => (
                <form className="w-[410px]" onSubmit={formik.handleSubmit}>
                    <div className="mb-[24px]">
                        <label
                            htmlFor="author"
                            className="text-[14px] font-bold mb-[18px]"
                        >
                            Leave a comment
                        </label>
                        <Field
                            placeholder="Comment author"
                            type="text"
                            onBlur={formik.handleBlur}
                            className="w-full border-[1px] border-black flex align-center px-[18px] text-black placeholder:text-black py-[10px] outline-none text-[14px]"
                            // value={formData.firstname}
                            name="author"
                            id="author"
                        />
                        <ErrorMessage
                            name="author"
                            className="text-red-500 text-[14px]"
                            component="div"
                        />
                    </div>
                    <div className="mb-[34px]">
                        <Field
                            placeholder="Comment text"
                            type="text"
                            onBlur={formik.handleBlur}
                            className="w-full border-[1px] border-black flex align-center px-[18px] text-black placeholder:text-black py-[10px] outline-none text-[14px]"
                            // value={formData.firstname}
                            name="text"
                            id="text"
                        />
                        <ErrorMessage
                            name="text"
                            className="text-red-500 text-[14px]"
                            component="div"
                        />
                    </div>
                    <button
                        className="w-full p-[11px] bg-black text-white flex justify-center items-center hover:opacity-[70%] transition"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    );
}
