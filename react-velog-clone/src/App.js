import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Article from "./pages/Article";
import ArticlesContainer from "./components/Home/ArticlesContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/write" component={Write} />
          <Route component={() => <p>Page Not Found</p>} />
        </Switch> */}
        <Routes>
          <Route path="/*" element={<Home />}>
            <Route path="" element={<ArticlesContainer />} />
            <Route path="series" element={<p>This is Series</p>} />
          </Route>
          <Route path="/article/:id" element={<Article />} />
          <Route path="/article/edit/:id" element={<Write />} />
          <Route path="/write" element={<Write />} />
          <Route path="/*" element={<p>Page Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
