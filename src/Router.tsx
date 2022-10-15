import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import User from "./pages/User";

export default function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user/:user" element={<User />} />
    </Routes>
  </BrowserRouter>
  )
}
