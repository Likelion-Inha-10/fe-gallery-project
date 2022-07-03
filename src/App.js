import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./component/Global";
import HomePage from "./pages/HomePage";
import Detail from "./pages/Detail";

const apiUrl = "https://gallery.devhudi.xyz";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              imgUrl="fire.jpg"
              name="likelion_10th_frontend"
              content="멋쟁이사자처럼 10기 여러분의 소중한 추억들을 보관합니다 😎"
              apiUrl={apiUrl}
            />
          }
        />
        <Route path="/:id" element={<Detail apiUrl={apiUrl} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
