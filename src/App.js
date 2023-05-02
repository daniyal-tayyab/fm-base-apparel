import styled from "styled-components";

import logo from "./images/logo.svg";
import heroDesktop from "./images/hero-desktop.jpg";
import heroMobile from "./images/hero-mobile.jpg";
import next from "./images/icon-arrow.svg";

import useWindowsDimensions from "./utils/getWindowsDimenssions";
import { useEffect } from "react";

function App() {
  const { width } = useWindowsDimensions();
  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <Container>
      <Right>
        <Header>
          <img src={logo} alt="logo" />
        </Header>
        {width < 720 && (
          <MobileHero>
            <img
              src={heroMobile}
              style={{ margin: "3rem 0", width: "100%" }}
              alt="hero"
            />
          </MobileHero>
        )}
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
  justify-content: space-between;
  align-items: center;

  background-image: linear-gradient(
    to right bottom,
    hsl(0, 0%, 100%),
    hsl(0, 100%, 98%),
    hsl(0, 0%, 100%)
  );

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    padding: 1rem 0;
  }
`;

const Right = styled.div`
  width: 50%;
  padding: 5rem 15rem;
  align-self: stretch;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    padding: 5rem 10rem;
  }

  @media (max-width: 1030px) {
    padding: 5rem 8rem;
  }

  @media (max-width: 990px) {
    padding: 5rem 6rem;
  }

  @media (max-width: 930px) {
    padding: 5rem 4rem;
  }

  @media (max-width: 890px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 770px) {
    padding: 5rem 1rem;
  }

  @media (max-width: 700px) {
    padding: 1rem 1rem;
    width: 100%;
  }

  @media (max-width: 550px) {
    padding: 1rem 0rem;
    width: 100%;
  }
`;

const Header = styled.div`
  @media (max-width: 550px) {
    padding: 0 1rem;
  }
`;

const Main = styled.main`
  font-size: 2.5rem;
  margin-top: 8rem;

  h1 {
    text-transform: uppercase;
    letter-spacing: 2rem;
    font-weight: 500;

    span {
      color: ${(props) => props.theme.desaturatedRed};
      font-weight: 300;
    }

    @media (max-width: 700px) {
      letter-spacing: 1px;
    }
  }

  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    color: ${(props) => props.theme.desaturatedRed};
    line-height: 1.7;
    font-weight: 400;

    @media (max-width: 770px) {
      font-size: 1.3rem;
    }

    @media (max-width: 700px) {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 890px) {
    font-size: 2rem;
  }

  @media (max-width: 770px) {
    font-size: 1.8rem;
  }

  @media (max-width: 700px) {
    padding: 0 1rem;
    margin-top: 0;
  }
`;

const MobileHero = styled.div`
  padding: 0;
`;

const InputContainer = styled.div`
  height: 5rem;
  display: flex;
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

    @media (max-width: 700px) {
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

    box-shadow: 0 3px 3px 3px rgba(248, 191, 191, 0.4);
    transition: all 0.5s;

    &:hover {
      opacity: 0.8;
      box-shadow: 0 4px 4px 4px rgba(248, 191, 191, 0.8);
    }
  }
`;

const SideImage = styled.div`
  width: 50%;
  align-self: stretch;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
    display: none;
  }
`;

export default App;
