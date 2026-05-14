import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import AddSkill from "../pages/AddSkill";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Requests from "../pages/Requests";
import EditSkill from "../pages/EditSkill";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/add-skill"
        element={
          <ProtectedRoute>
            <AddSkill />
          </ProtectedRoute>
        }
      />

      <Route
        path="/requests"
        element={
          <ProtectedRoute>
            <Requests />
          </ProtectedRoute>
        }
      />

      <Route
        path="/edit-skill/:id"
        element={
          <ProtectedRoute>
            <EditSkill />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;