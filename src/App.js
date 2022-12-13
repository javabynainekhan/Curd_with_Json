import AddUsers from "./Components/AddUsers/AddUsers";
import AllUsers from "./Components/AllUsers/AllUsers";
import CodeWithJulkhair from "./Components/CodeWithJulkhair/CodeWithJulkhair";
import NavBar from "./Components/NavBar/NavBar";
import "./styles.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUsers from "./Components/EditUser/EditUser";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="dataStyle">
          <Routes>
            <Route exact path="/" element={<CodeWithJulkhair />} />
            <Route exact path="/allusers" element={<AllUsers />} />
            <Route exact path="/addusers" element={<AddUsers />} />
            <Route
              exact
              path="/*"
              element="<h1><marquee>404 Page Not Found. plz again...  </marquee></h1>"
            />
            <Route exact path="/edit/:id" element={<EditUsers />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
