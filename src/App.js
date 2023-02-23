import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./pages/user/register";
import Login from "./pages/user/login";
import Logout from "./pages/user/logout";
import ReadAll from "./pages/item/readAll";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/logout" element={<Logout />} />
        <Route path="/" element={<ReadAll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
