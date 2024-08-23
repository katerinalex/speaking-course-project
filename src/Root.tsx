import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import App from "./App";
import AuthPage from "./pages/AuthPages/AuthPage";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import ResetPassword from "./components/Auth/ResetPassword";

import { AdminCoursesPreview } from "./components/AdminCoursesPreview";
import { AdminCoursesEdit } from "./components/AdminCoursesEdit";

import { CoursesPage } from "./components/CoursesPage/CoursesPage";
import { BlogPage } from "./components/BlogPage/BlogPage";
import { SuccessPage } from "./components/SuccessPage/SuccessPage";
import { MyCourses } from "./pages/Cabinet/MyCourses";
import { CoursePage } from "./pages/Cabinet/CoursePage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<AuthPage page={<Login />} />} />
        <Route path="/signin" element={<AuthPage page={<Signin />} />} />
        <Route path="/reset" element={<AuthPage page={<ResetPassword />} />} />

        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="success" element={<SuccessPage />} />
          <Route path="cabinet">
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="my-course" element={<CoursePage />} />
          </Route>
        </Route>

        <Route path="/preview" element={<AdminCoursesPreview />} />
        <Route path="/edit" element={<AdminCoursesEdit />} />

      </Routes>
    </HashRouter>
  );
};
