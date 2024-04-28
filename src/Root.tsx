import { Routes, Route, HashRouter } from "react-router-dom";
// import { HomePage } from "./components/HomePage/HomePage";
// import App from "./App";
import { Admin } from "./components/Admin"

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        {/* <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />

        </Route> */}
        <Route path="/" element={<Admin />} > {/* admin/courses/preview */}
        </Route>
        
      </Routes>

    </HashRouter>
  )
}