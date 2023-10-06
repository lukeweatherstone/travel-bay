import axios from "axios";

import {
  setBlogPostByCategory,
  setLoading,
  setError,
  blogPostCreated,
  blogPostRemoved,
  blogPostUpdated,
  setBlogPost,
} from "../slices/blogPost";

export const getBlogPostsByCategory =
  (category, pageItems) => async (dispatch) => {
    dispatch(setLoading(true));

    try {
      const { data, status } = await axios.get(`/api/blog-posts`);
      dispatch(setBlogPostByCategory(data));
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "An unexpected error has occurred. Please try again later."
        )
      );
    }
  };
