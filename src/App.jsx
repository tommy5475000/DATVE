import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./modules/Home";
import MainLayout from "./layouts/MainLayout";
import Details from "./modules/Details/Details";
import Tickets from "./modules/Details/Tickets";
import SignIn from "./Auth/pages/SignIn";
import SignUp from "./Auth/pages/SignUp";
import UserProvider from "./contexts/UserContext/UserContext";
import ProtectedRoute from "./routers/ProtectedRoute";
import Admin from "./admin";
import AdminPages from "./AdminPages";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="movies/:cinemaId" element={<Details />} />

            <Route
              path="tickets/:ticketId"
              element={
                <ProtectedRoute>
                  <Tickets />
                </ProtectedRoute>
              }
            />

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>

          
          <Route path="/admin" element={<AdminPages />} />

          <Route path="*" element={"123"} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
