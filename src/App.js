import react from "react";
import { Route, Routes } from "react-router-dom";
import Owner from "./pages/Owner";
import { GlobalStyles } from "./GlobalStyle";
import Article from "./pages/Article";
import ErrorPage from "./pages/ErrorPage";

const API_URL = "https://gallery.devhudi.xyz";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Owner api={API_URL} />}></Route>
        <Route
          path="/album/:articleId"
          element={<Article api={API_URL} />}
        ></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
};
export default App;
