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
const DetailTask = lazy(() => import("./pages/detailTask/DetailTask"));
const Home = lazy(() => import("./pages/home/Home"));
const Manager = lazy(() => import("./pages/manager/Manager"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const Lyrics = lazy(() => import("./pages/lyrics/Lyrics"));
const Practice = lazy(() => import("./pages/practice/Practice"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="manager-task" element={<Manager />} />
      <Route path="lyrics" element={<Lyrics />} />
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
