// AddList.js

import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addDictionaryFB } from "./redux/modules/dictionary";

const AddList = ({}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const dictionary_index = () => {
    const card = {
      word: word.current.value,
      account: account.current.value,
      example: example.current.value,
    };
    dispatch(addDictionaryFB(card));
  };

  //ref를 선언해준다.
  // input에 있는 값들을 가지고오겠다. 초기값을 null로하겠다.!
  const word = React.useRef(null);
  const account = React.useRef(null);
  const example = React.useRef(null);

  console.log(word);
  console.log(account);
  console.log(example);
  return (
    <Container>
      <Title>단어추가하기</Title>
      <div>
        <SecondTitle>단어</SecondTitle>
        <Input type="text" ref={word} placeholder="단어를 입력해주세요." />
        <SecondTitle>설명</SecondTitle>
        <Input type="text" ref={account} placeholder="설명을 입력해주세요." />
        <SecondTitle>예시</SecondTitle>
        <Input type="text" ref={example} placeholder="예시를 입력해주세요." />
      </div>
      <ButtonWrap>
        <Button
          onClick={() => {
            history.push("/");
            dictionary_index();
          }}
        >
          추가하기
        </Button>
        <Button
          onClick={() => {
            history.push("/");
          }}
        >
          뒤로가기
        </Button>
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid #ddd;
  width: 300px;
  margin: auto;
  border-radius: 30px;
  padding: 10px;
`;

const Title = styled.h1`
  text-align: center;
`;

const SecondTitle = styled.h5`
  text-decoration: underline;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 280px;
  margin: auto;
  border: 1px solid orange;
  border-radius: 30px;
  padding: 5px;
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const Button = styled.button`
  width: 140px;
  margin: auto;
  display: flex;
  justify-content: center;
  background: orange;
  border: 2px solid orange;
  border-radius: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  cursor: pointer;
`;

export default AddList;
