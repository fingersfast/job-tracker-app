import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Landing, Register, Error } from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";
import SharedLayout from "./pages/dashboard/SharedLayout";
import { AddJob } from "./pages/dashboard";
import AllJobs from "./pages/dashboard/AllJobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="add-job" element={<AddJob />} />
          <Route path="all-jobs" element={<AllJobs />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
