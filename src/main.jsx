import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { basePath } from "./components/BasePath/BasePath";
import { TaskDetail } from "./components/TaskDetail/TaskDetail";

const router = createBrowserRouter([
  {
    path: `${basePath}/`,
    element: <App />,
  },
  {
    path: `${basePath}/task/:taskId`,
    element: <TaskDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
