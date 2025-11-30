import { axiosInstanceRequest } from "./axios";
import type { ICategory } from "@/types/category";
import type { IProduct } from "@/types/product"
import { QueryFunctionContext } from "@tanstack/react-query";

// import slices

import { usePagination } from "./ui-slices/pagination";

interface PaginationParams1 {
  page?: number;
  limit?: number;
  search?: string;
  sortOrder?: "asc" | "desc";
}

// TODO: REQUESTS FOR AUTHENTICATION
export const createUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axiosInstanceRequest.post("/auth/sign-up", userData);
  return res.data;
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
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
  const { page, limit, search, sortBy, sortOrder } = usePagination.getState();

  const res = await axiosInstanceRequest.get("/products", {
    params: {
      page,
      limit,
      search,
      sortBy,
      sortOrder,
    },
  });

  return res?.data;
};

export const createProducts = async (formData: FormData) => {
  const res = await axiosInstanceRequest.post("/products/new", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};



export const getProductsByCategory = async (
  context: QueryFunctionContext<[string, id: string,  PaginationParams1?]>
): Promise<{ success: boolean; data: IProduct[] }> => {
  const [, params] = context.queryKey;

  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.append("page", params.page.toString());
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.search) queryParams.append("search", params.search);
  if (params?.sortOrder) queryParams.append("sortOrder", params.sortOrder);

  const queryString = queryParams.toString();
  const url = `/products/category/${id}${queryString ? `?${queryString}` : ""}`;

  const res = await axiosInstanceRequest.get(url);
  return res.data
};

// TODO: REQUESTS FOR CATEGORIES
interface GetAllCategoriesParams {
  page?: number;
  limit?: number;
  search?: string;
  sortOrder?: "asc" | "desc";
}

export const getAllCategories = async (
  context: QueryFunctionContext<[string, GetAllCategoriesParams?]>
): Promise<{ success: boolean; data: ICategory[] }> => {
  const [, params] = context.queryKey;

  const queryParams = new URLSearchParams();
  if (params?.page) queryParams.append("page", params.page.toString());
  if (params?.limit) queryParams.append("limit", params.limit.toString());
  if (params?.search) queryParams.append("search", params.search);
  if (params?.sortOrder) queryParams.append("sortOrder", params.sortOrder);

  const queryString = queryParams.toString();
  const url = `/categories${queryString ? `?${queryString}` : ""}`;

  const res = await axiosInstanceRequest.get(url);
  return res.data
};


interface INewCategory {
    name: string;
    slug: string;
}

export const createNewCategory = async function (data: INewCategory) {
    const res = await axiosInstanceRequest.post("/categories/new", data)
    return res;
}

export const deleteCategory = async function (id: string) {
   const res = await axiosInstanceRequest.delete(`categories/delete/${id}`);
  return res;
}

// TODO: REQUESTS FOR REVIEWS
