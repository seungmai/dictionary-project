import React from "react";

import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import DictionaryList from "./DictionaryList";
import AddList from "./AddList";

import { db } from "./firebase";

// 함수형 컴포넌트
function App() {
  return (
    <Appwrap className="App">
      <Container>
        <Title>MY DICTIONARY</Title>
        <Line />
        <Switch>
          <Route path="/" exact>
            <DictionaryList />
          </Route>
          <Route path="/add" exact>
            <AddList />
          </Route>
        </Switch>

        <Line />
      </Container>
    </Appwrap>
  );
}

const Appwrap = styled.div``;

const Container = styled.div``;

const Title = styled.h1``;

const Line = styled.hr``;

export default App;
