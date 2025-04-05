import { axiosInstanceRequest } from "./axios";

// TODO: REQUESTS FOR AUTHENTICATION 
export const createUser = async (userData: { name: string; email: string; password: string; }) => {
  const res = await axiosInstanceRequest.post("/auth/sign-up", userData);
  return res.data;
};


export const login = async (credentials: { email: string; password: string; }) => {
  const res = await axiosInstanceRequest.post("/auth/sign-in", credentials);
  return res.data;
};

export const getSession = async () => {
  const res = await axiosInstanceRequest.get("/auth/is-auth");
  return res.data;
};

export const logoutRequest = async () => {
  await axiosInstanceRequest.get("auth/logout");
};

// TODO: REQUESTS FOR PRODUCTS
export const getAllProducts = async () => {
  const res = await axiosInstanceRequest.get('/products/')
  return res?.data
}

export const createProducts = async (values: any) => {
  console.log(values)
  for (const pair of values.entries()) {
    console.log(pair[0], pair[1]);
  }
  const res = await axiosInstanceRequest.post('/products/new', values)
  return res.data;
}

// TODO: REQUESTS FOR CATEGORIES
export const getAllCategories = async () => {

  console.log("before the request")
  const res = await axiosInstanceRequest.get('/categories/')
  console.log(res.data)
  return res.data;
}

// TODO: REQUESTS FOR REVIEWS


