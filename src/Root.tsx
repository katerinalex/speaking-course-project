import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import App from "./App";
import { AdminCoursesPreview } from "./components/AdminCoursesPreview"
import { AdminCoursesEdit } from "./components/AdminCoursesEdit";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
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