import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import { useState } from "react";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`
//RENDERIZAÇÃO CONDICIONAL: iF/ELSE/WHILE/SWITH CASE

function App() {

  
  const [tela, setTela]= useState(1) //criado um estado onde guardamos os dados do nosso componente, 1 é o valor inicial que estou dando a tela.

  const mudarTelaFinal= () =>{
    setTela(3)
  }

//////////////////////////////////////////////////////////////////
//2 fromas de fazer condicinal dentro de uma jsx statememts: if/else/while/for coisas que não podem atribuir em variaveis, são apenas instruções não resultam em um valor e expressions: resultam ou são valores em si, texto, número , objeto
  //statements
  // pode fazer com if ou switch case

  // if(tela===1){

  // return (
  //   <MainContainer >
  //     <GlobalStyled />
  //     <TelaLogin />
  //   </MainContainer>
  // );
  // }else{
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaCadastro />
  //     </MainContainer>}

  ///////////////////////////////////////////////////////////////////////

  // const mudarTela= () =>setTela(3) outra forma de fazer essa mesma função foi criada la em baixo
  
  ///////////////////////////////////////////////////////////////////////
//ANTES ESTAVA AS DUAS PAGINAS MOSTRANDO NA WEB, COM A CONDICIONAL ELE RENDERIZA UMA E DEPOIS OUTRA
      //statementes-Switch Case
      switch(tela){
        case 1:
        return (
          <MainContainer >
            <GlobalStyled />
            <TelaLogin mudarTela={() =>setTela(2)} />
          </MainContainer>
        );
        case 2:
          return (
            <MainContainer >
            <GlobalStyled />
            <TelaCadastro 
              mudarTelaFinal={mudarTelaFinal} 
              mudarTela={()=>setTela(1)}
            />
          </MainContainer>
          );

        case 3:
          return (
            <MainContainer >
              <GlobalStyled />
              <TelaUsuarioCadastrado/>
            </MainContainer>
    );
    default: //USADO COMO UMA PAGINA DE ERRO CASO DE ERRADO ALGO
        return (
          <MainContainer >
            <GlobalStyled />
            <h1>Algo deu errado</h1>
          </MainContainer>
        )
 }

///////////////////////////////////////////////////////////
    //EXPRESSIONS: pode usar if ternário e curto-circuito
  
    // return (
  //   <MainContainer >
  //   <GlobalStyled />

//USAR OU UM OU OUTRO
//TERNÁRIO
  //   /* {condição? true : false}
  //   {tela === 1? <TelaLogin/> : <TelaCadastro/>} */

  //CURTO-CIRCUITO
  //  {/* curto circuito- se tela for true retorna TelaLogin, se falso retorna a propria tela */}
  //   {(tela && <TelaLogin/>) || <TelaCadastro/>}
    
  //   </MainContainer>
  // )

/////////////////////////////////////////////////////////
}

export default App;