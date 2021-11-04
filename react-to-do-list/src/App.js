import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ListContainer from "./Components/ListContainer";
import Footer from "./Components/Footer";
import GlobalStyles from "./Components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ListContainer />
      <Footer />
      <GlobalStyles />
    </div>
  );
}

export default App;
