import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:userId" element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
