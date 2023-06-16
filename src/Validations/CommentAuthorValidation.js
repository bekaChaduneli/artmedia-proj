import * as yup from "yup";

export const commentSchema = yup.object().shape({
    author: yup.string().min(4).max(50).required("author name is required!"),
    text: yup.string().min(3).required("text is required!"),
});
