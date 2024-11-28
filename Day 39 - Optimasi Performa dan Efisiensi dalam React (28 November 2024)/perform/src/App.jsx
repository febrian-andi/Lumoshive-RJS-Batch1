import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DynamicImport from "./pages/DynamicImport";
import ImportOnVisibility from "./pages/ImportOnVisibility";
import ListVirtualization from "./pages/ListVirtualization";
import BlogDetail from "./pages/BlogDetail";
import Cache from "./pages/Cache";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">Navbar</span>
            <ul className="navbar-nav d-flex flex-row">
              <li className="nav-item me-3">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/dynamic-import">Dynamic Import</Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/import-on-visibility">Import On Visibility</Link>
              </li>
              <li className="nav-item me-3">
                <Link to="/list-virtualization">List Vistualization</Link>
              </li>
              <li className="nav-item">
                <Link to="/cache">Cache</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dynamic-import" element={<DynamicImport />} />
          <Route
            path="/import-on-visibility"
            element={<ImportOnVisibility />}
          />
          <Route path="/list-virtualization" element={<ListVirtualization />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/cache" element={<Cache />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
