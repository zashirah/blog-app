import api from "./apiConfig";

export const getPosts = async () => {
  try {
    const response = await api.get("/posts");
    console.log(response.data[0].userId.firstName);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (product) => {
  try {
    const response = await api.post("/posts", product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, product) => {
  try {
    const response = await api.put(`/posts/${id}`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await api.delete(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
