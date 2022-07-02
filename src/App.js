import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyles";
import MainPage from "./pages/MainPage";
import PostInfoPage from "./pages/PostInfoPage";
const API_URL = "https://gallery.devhudi.xyz";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainPage api_url={API_URL} />} />
          <Route
            path="/:articleId"
            element={<PostInfoPage api_url={API_URL} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
