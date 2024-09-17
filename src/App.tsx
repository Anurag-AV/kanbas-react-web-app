import Labs from "./Labs";
import Kanbas  from "./Kanbas";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Kanbas/*" element={<Kanbas/>}></Route>
          <Route path="/Labs/*" element={<Labs />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
