import MainLayout from "./Layouts/MainLayout.tsx";
import MemesPage from "./Pages/MemesPage.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage.tsx";
import MotivationPage from "./Pages/MotivationPage.tsx";
import AboutMe from "./Pages/AboutMe.tsx";
import GeneralLayout from "./Layouts/GeneralLayout.tsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  element={<MainLayout />}>
            <Route path="/" element={<MemesPage />} />
            <Route path="/motivation" element={<MotivationPage />} />
          </Route>

          <Route  element={<GeneralLayout/>}>
            <Route path="/ahmod-hasan" element={<AboutMe />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
