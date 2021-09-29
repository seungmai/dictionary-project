import React from "react";
import styled from "styled-components";

// 라우팅사용하기!
import { Route, Switch } from "react-router-dom";

// 컴포넌트 불러오기!
import DictionaryList from "./DictionaryList";
import AddList from "./AddList";

// 함수형 컴포넌트
function App() {
  return (
    <div className="App">
      <div>
        <Title>MY DICTIONARY</Title>
        <TwoTitle>HangHae React Dictionary Project</TwoTitle>
        <Line />
        {/* 스위치를 쓰는 이유는 주소를 옳바르게 사용하기 위하여 사용한다(ex.주소를 막쳤는데 들어가짐, 이것을 방지하기위해 스위치를 사용) */}
        <Switch>
          {/* exact는 부모만 띄어줄꺼라는 의미 */}
          {/* 라우터는 그냥 이런구조로 쓴다고 생각해라! */}
          <Route path="/" exact>
            {/* DictionaryList 컴포넌트 불러옴 */}
            <DictionaryList />
          </Route>
          <Route path="/add">
            {/* AddList 컴포넌트 불러옴 */}
            <AddList />
          </Route>
        </Switch>
        <Line />
      </div>
    </div>
  );
}

const Title = styled.h1`
  text-align: center;
  color: orange;
`;

const TwoTitle = styled.h3`
  text-align: center;
  color: grey;
`;

const Line = styled.hr`
  width: 95%;
`;

export default App;
