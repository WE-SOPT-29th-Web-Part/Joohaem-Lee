import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";

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
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
