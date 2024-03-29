import styled from "styled-components";
import { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ListContainer from "./Components/ListContainer";
import Footer from "./Components/Footer";
import GlobalStyles from "./Components/GlobalStyles";

const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

function App() {
  const [openToday, setOpenToday] = useState("open");
  const [openTommorrow, setOpenTommorrow] = useState("open");

  return (
    <Wrapper className="App">
      <Header />
      <Nav setOpenToday={setOpenToday} setOpenTommorrow={setOpenTommorrow} />
      <ListContainer openToday={openToday} openTommorrow={openTommorrow} />
      <Footer />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
