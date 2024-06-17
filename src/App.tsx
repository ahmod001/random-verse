import MainLayout from "./Layouts/MainLayout.tsx";
import MemesPage from "./Pages/MemesPage.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import MotivationPage from "./Pages/MotivationPage.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index  element={<MemesPage />} />
          <Route path="/motivation" element={<MotivationPage />} />
          </Route>

          <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
