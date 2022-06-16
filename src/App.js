import {
  Button,
  ButtonsDiv,
  Container,
  Counter,
  LogoImage,
  LogoTitle,
  Main,
  MainContent,
  MobileIcon,
  MusicArtist,
  MusicMobileInfo,
  MusicTitle,
  PresentationDiv,
} from "./AppStyles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import heart from "./assets/icons/heart.svg";

function App() {
  return (
    <Container>
      <Header />

      <Main>
        <MainContent>
          <PresentationDiv>
            <LogoImage src={logo} alt="logo" />
          </PresentationDiv>

          <LogoTitle>Riot Games</LogoTitle>

          <ButtonsDiv className="controllers">
            <Button>
              <AiOutlineLeft color="#14061F" size={15} />
            </Button>

            <Counter>1/33</Counter>

            <Button>
              <AiOutlineRight color="#14061F" size={15} />
            </Button>
          </ButtonsDiv>

          <MusicMobileInfo className="music_mobile">
            <MusicTitle>
              Warriors
              <MobileIcon src={heart} className="icon" />
            </MusicTitle>

            <MusicArtist>Riot Games ft. Imagine Dragons</MusicArtist>
          </MusicMobileInfo>
        </MainContent>
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
