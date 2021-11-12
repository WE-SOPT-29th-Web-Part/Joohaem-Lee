import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
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
            <Route path="series" element={<Write />} />
          </Route>
          <Route path="/write" element={<Write />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
