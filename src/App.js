import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const API_URL = "https://gallery.devhudi.xyz/";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage apiUrl={API_URL}></MainPage>} />
        <Route path="/image" element={<DetailPage></DetailPage>} />

        <Route path="*" element={<h2>페이지를 찾을 수 없습니다.</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
