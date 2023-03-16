import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import { AddTask } from "./pages/addTask/AddTask";
import { DetailTask } from "./pages/detailTask/DetailTask";
import { Home } from "./pages/home/Home";
import { Manager } from "./pages/manager/Manager";
import { Practice } from "./pages/practice/Practice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="add-task" element={<AddTask />} />
      <Route path="manager-task" element={<Manager />} />
      <Route path="practice" element={<Practice />} />
      <Route path="dtail-task" element={<DetailTask />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
