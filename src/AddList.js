import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { addDictionaryFB } from "./redux/modules/dictionary";
import { useDispatch } from "react-redux";
import { updateDoc } from "@firebase/firestore";

const AddList = ({ list }) => {
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

  const word = React.useRef(null);
  const account = React.useRef(null);
  const example = React.useRef(null);

  console.log(word);
  console.log(account);
  console.log(example);
  return (
    <Container>
      <Title>단어 추가하기</Title>
      <SecondDiv>
        <SecondTitle>단어</SecondTitle>
        <input ref={word} type="text" placeholder="단어를 입력하세요!" />
      </SecondDiv>
      <SecondDiv>
        <SecondTitle>설명</SecondTitle>
        <input ref={account} type="text" placeholder="설명을 입력하세요!" />
      </SecondDiv>
      <SecondDiv>
        <SecondTitle>예시</SecondTitle>
        <input ref={example} type="text" placeholder="예시를 입력하세요!" />
      </SecondDiv>

      <Button
        onClick={() => {
          dictionary_index();
          history.push("/");
        }}
      >
        추가하기
      </Button>
    </Container>
  );
};

const Container = styled.div``;

const Title = styled.h3``;

const SecondDiv = styled.div``;

const SecondTitle = styled.h5``;

const Button = styled.div``;

export default AddList;
