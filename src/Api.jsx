import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProructsApi = createApi({
  reducerPath: "getProructsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "products",
      }),
    }),
  })
});

export const useGetAllProductsQuery = getProructsApi;
export default getProructsApi.reducer;

// export async function getAllItems(){
//   const response = await fetch(`${host}/products`);
//   if (response.status === 400) {
//     throw new Error("");
//   } else if (response.status === 500) {
//     throw new Error("Внутренняя ошибка сервера");
//   }
//   const data = response.json();
//   console.log(data);
//   return data;
// }

// export async function getItem(id){
//   const response = await fetch(`${host}/${id}`);
//   if (response.status === 400) {
//     throw new Error("Произошла ошибка");
//   } else if (response.status === 500) {
//     throw new Error("Внутренняя ошибка сервера");
//   }
//   const data = response.json();
//   console.log(data);
//   return data;
// }
