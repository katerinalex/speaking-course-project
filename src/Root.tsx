import { Routes, Route, HashRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import App from "./App";
import AuthPage from "./pages/AuthPages/AuthPage";
import Login from "./components/Auth/Login";
import Signin from "./components/Auth/Signin";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<AuthPage page={<Login/>} />} />
        <Route path="/signin" element={<AuthPage page={<Signin/>} />} />

        <Route path="/" element={<App />} >
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}