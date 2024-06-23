import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import App from "./App";
import { CoursesPage } from "./components/CoursesPage/CoursesPage";
import { BlogPage } from "./components/BlogPage/BlogPage";
import { SuccessPage } from "./components/SuccessPage/SuccessPage";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="success" element={<SuccessPage />} />
        </Route>
        
      </Routes>

    </HashRouter>
  )
}