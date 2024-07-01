import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landingPage";
import Sheet from "./pages/sheet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="sheet" element={<Sheet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
