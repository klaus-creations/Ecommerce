import { axiosInstanceRequest } from "@/features/axios";
import type { IProduct } from "@/types/product"
import { QueryFunctionContext } from "@tanstack/react-query";


export const getProductById = async (
  context: QueryFunctionContext<[string, id: string]>
): Promise<{ success: boolean; data: IProduct }> => {
  const [, id] = context.queryKey;

  const url = `/products/${id}`;
  const res = await axiosInstanceRequest.get(url);

  return res.data;
};
