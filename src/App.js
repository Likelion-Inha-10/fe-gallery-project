import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  box-sizing: border-box;
  a:link{color:black;text-decoration: none;}
  a:visited{color:black;text-decoration:none;}
}`;

const API_URL = "https://gallery.devhudi.xyz";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home apiUrl={API_URL} />}></Route>
          <Route
            path="/:pageId"
            element={<DetailPage apiUrl={API_URL} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
