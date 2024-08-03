import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./routes/RootLayout.jsx";
import Posts, { loader as postLoader } from "./routes/Posts.jsx";
import NewPost, { action as newActionPost } from "./routes/NewPost.jsx";
import PostDetails, {
  loader as postDetailLoader,
} from "./routes/PostDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newActionPost },
          {
            path: "/:postId",
            element: <PostDetails />,
            loader: postDetailLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
