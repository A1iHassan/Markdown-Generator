import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Convert from "./pages/convert";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/convert" element={<Convert />} />
    </Routes>
  );
}

export default App;
