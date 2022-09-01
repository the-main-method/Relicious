import Pages from "./pages/Pages";
import Search from "./components/Search";
import Category from "./components/Category";
import {BrowserRouter, Link} from 'react-router-dom'
import styled from "styled-components"
import {GiKnifeFork} from "react-icons/gi"

// hejokof541@vpsrec.com
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={"/"}>
          <GiKnifeFork></GiKnifeFork>
          Relicious
        </Logo>
      </Nav>
        <h1>Hello there, individual!</h1>
        <Search></Search>
        <Category></Category>
        <Pages></Pages>
      </BrowserRouter>
      
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
`

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 2rem;
  }
`

export default App;
