// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CreateSeries from "./pages/CreateSeries";
import EditSeries from "./pages/EditSeries";
import DeleteSeries from "./pages/DeleteSeries";

function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create-series" element={<CreateSeries />} />
              <Route path="/edit-series/:id" element={<EditSeries />} />
              <Route path="/delete/:id" element={<DeleteSeries />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
