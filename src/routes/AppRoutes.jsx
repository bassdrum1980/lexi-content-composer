import { Routes, Route, Navigate } from "react-router-dom";
import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";
import ArticlesPage from "../pages/ArticlesPage.jsx";
import RulesPage from "../pages/RulesPage.jsx";
import CardsPage from "../pages/CardsPage.jsx";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="article" element={<ArticlesPage />} />
        <Route path="rules" element={<RulesPage />} />
        <Route path="cards" element={<CardsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
