import styled from "styled-components";

import logo from "./images/logo.svg";
import heroDesktop from "./images/hero-desktop.jpg";
import next from "./images/icon-arrow.svg";

function App() {
  return (
    <Container>
      <Right>
        <Header>
          <img src={logo} alt="logo" />
        </Header>
        <Main>
          <h1>
            <span>we're </span>comming soon
          </h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <InputContainer>
            <input type="email" placeholder="Email Address" />
            <div>
              <img src={next} alt="next" />
            </div>
          </InputContainer>
        </Main>
      </Right>
      <SideImage>
        <img src={heroDesktop} alt="hero" />
      </SideImage>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Right = styled.div`
  padding: 7rem 15rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;

const Main = styled.main`
  font-size: 3rem;
  margin-top: 13rem;

  h1 {
    text-transform: uppercase;
    letter-spacing: 2rem;
    font-weight: 500;

    span {
      color: ${(props) => props.theme.desaturatedRed};
      font-weight: 300;
    }
  }

  p {
    margin-top: 2rem;
    font-size: 1.6rem;
    color: ${(props) => props.theme.desaturatedRed};
    line-height: 1.7;
    font-weight: 400;
  }
`;

const InputContainer = styled.div`
  height: 5rem;
  display: flex;

  // border-image: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%)) 20;
  // border-width: 3px;
  // border-style: solid;
  border: 1px solid hsl(0, 80%, 86%);
  border-radius: 35px;
  margin-top: 4rem;
  background-image: ${(props) => props.theme.whiteGradient};

  input {
    height: 100%;
    width: 80%;
    border-radius: 35px;
    border: none;
    padding-left: 2rem;
    background: transparent;

    &:focus {
      outline: none;
    }
  }

  div {
    width: 20%;
    background-image: ${(props) => props.theme.pinkGradient};
    border-radius: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    box-shadow: 0 7px 5px 6px rgba(248, 191, 191, 0.4);
    transition: all 0.5s;

    &:hover {
      opacity: 0.8;
      box-shadow: 0 7px 5px 6px rgba(248, 191, 191, 0.8);
    }
  }
`;

const SideImage = styled.div`
  width: 70vw;
  height: 100vh;
  img {
    height: 100%;
    width: 100%;
  }
`;

export default App;
