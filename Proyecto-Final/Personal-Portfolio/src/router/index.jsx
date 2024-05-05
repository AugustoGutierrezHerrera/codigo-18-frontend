import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUp } from "../pages";
import { AuthLayout, MainLayout } from "../layouts";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage/>}></Route>
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
