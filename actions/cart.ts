"use server";
import axios from "axios";

export const getCart = async (_id: string) => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/user/carts?_id=" + _id,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response.data.data;
  } catch (error) {
    return error;
  }
};
