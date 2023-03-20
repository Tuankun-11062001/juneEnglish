import React, { lazy, Suspense } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Loading from "./components/loading/Loading";

const Header = lazy(() => import("./components/header/Header"));
const AddTask = lazy(() => import("./pages/addTask/AddTask"));
const DetailTask = lazy(() => import("./pages/detailTask/DetailTask"));
const Home = lazy(() => import("./pages/home/Home"));
const Manager = lazy(() => import("./pages/manager/Manager"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const Practice = lazy(() => import("./pages/practice/Practice"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="add-task" element={<AddTask />} />
      <Route path="manager-task" element={<Manager />} />
      <Route path="practice" element={<Practice />} />
      <Route path="detail-task" element={<Outlet />}>
        <Route path=":id" element={<DetailTask />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
