import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentListPage from "./pages/StudentListPage";
import AddStudentPage from "./pages/AddStudentPage";
import EditStudentPage from "./pages/EditStudentPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<StudentListPage />} />
              <Route path="/add-student" element={<AddStudentPage />} />
              <Route path="/edit-student/:id" element={<EditStudentPage />} />
              <Route
                path="/detail-student/:id"
                element={<StudentDetailPage />}
              />
              <Route
                path="*"
                element={<h1 className="text-center">Page Not Found</h1>}
              />
            </Routes>
          </Router>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
