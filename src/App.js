import React from 'react';
import './App.css';
import FormNew from './components/FormNew';
import logo from './components/Form/06-LOGO.png';
import Main from './components/Main';
import MainScreen from './components/MainScreen';
import MainText from './components/MainText';
import cafequa from './components/MainText/images/05-IMAGE (1).png';
import paoqua from './components/MainText/images/05-IMAGE-CardapioQ.png';
import styled from 'styled-components'


const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  
  > div {
    max-width: 500px;
  }
`

function App() {
  return (
    <MainScreen>
      <header id="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#" class="button_rest">O Restaurante</a>
        <a href="#" class="button_card">Cardápio</a>
        <a href="#" class="button_cont">Contato</a>
      </header>

      <Main>
        <MainText>
          <ContentContainer>
            <div>
              <p id="topo">Conheça o restaurante mais verde da cidade</p>
              <p id="randomtext">Lorem ipsum facilisis tortor quisque porttitor scelerisque nunc
                venenatis velit nam, curabitur integer neque metus vehicula
                enim accumsan ipsum, vestibulum non auctor aenean suscipit
                vivamus risus. mi porttitor sem quam justo vehicula suspendisse
              </p>
            </div>
            <img src={cafequa} className="ic" align="right" alt="coffeimage"/>
          </ContentContainer>
          <ContentContainer>
            <img src={paoqua} className="ic2" align="left" alt="breadimage"/>
            <div>
              <p id="topo2">Nosso Cardápio</p>
              <p id="randomtext2">Lorem ipsum facilisis tortor quisque porttitor scelerisque nunc
                venenatis velit nam, curabitur integer neque metus vehicula
                enim accumsan ipsum, vestibulum non auctor aenean suscipit
                vivamus risus. mi porttitor sem quam justo vehicula suspendisse
              </p>
              <button id="btn-card">ABRIR O CARDÁPIO</button>
            </div>
          </ContentContainer>
          <FormNew />
        </MainText>
      </Main>
      <footer id="logo2">
          <img src={logo} className="App-logo" alt="logo" />
          <a href="#" class="br">O Restaurante</a>
          <a href="#" class="bcard">Cardápio</a>
          <a href="#" class="bc">Contato</a>
      </footer>
    </MainScreen>
  );
}

export default App;
