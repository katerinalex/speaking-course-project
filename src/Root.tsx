import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import App from "./App";
import AuthPage from "./pages/AuthPages/AuthPage";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";
import ResetPassword from "./components/Auth/ResetPassword";

import { AdminCoursesPreview } from "./components/AdminCoursesPreview"
import { AdminCoursesEdit } from "./components/AdminCoursesEdit";


export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<AuthPage page={<Login/>} />} />
        <Route path="/signin" element={<AuthPage page={<Signin/>} />} />
        <Route path="/reset" element={<AuthPage page={<ResetPassword/>} />} />

        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/preview" element={<AdminCoursesPreview />} > {/* admin/courses/preview */}
        </Route>

        <Route path="/edit" element={<AdminCoursesEdit />} > {/* admin/courses/edit */}
        </Route>
      </Routes>
    </HashRouter>
  )
}
