import { useContext } from "react";
import { PostContext } from "./Context";
export default function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}
