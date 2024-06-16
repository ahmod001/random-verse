import MainLayout from "./Layouts/MainLayout.tsx";
import MemesPage from "./Pages/MemesPage.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<MemesPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
