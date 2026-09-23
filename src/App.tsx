import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import "./route-pages.css";

import CategoryPage from "./pages/CategoryPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/gallery"
        element={<GalleryPage />}
      />

      <Route
        path="/gallery/:category"
        element={<CategoryPage />}
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/"
            replace
          />
        }
      />
    </Routes>
  );
}

export default App;