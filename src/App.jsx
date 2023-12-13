import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Landing } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
