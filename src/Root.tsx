import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import App from "./App";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />

        </Route>
        
      </Routes>

    </HashRouter>
  )
}