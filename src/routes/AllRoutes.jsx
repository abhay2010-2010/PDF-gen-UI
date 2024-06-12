import { Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import Auth from "../page/Auth";
import InputPage from "../page/InputPage";

export const AllRoutes = () => {
 
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/input-page" element={<InputPage/>} />
    </Routes>
  );
};
