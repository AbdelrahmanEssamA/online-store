import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username,
      password,
    });
    localStorage.setItem("token", JSON.stringify(response.data.token));
    return response.data;
  } catch (e) {
    throw new Error("Invalid username or password");
  }
};

export const fetchProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (e) {
    throw new Error("Failed to fetch products");
  }
};
