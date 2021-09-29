// 리액트 패키지를 불러옴.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadDictionaryFB } from "./redux/modules/dictionary";

const DictionaryList = ({}) => {
  const history = useHistory();
  // const global_lists = list;
  // console.log(global_lists);
  // const global_lists = useSelector((state) => state.dictionary.list);

  // action을 사용하기(발생시키기) 위해 dispatch 선언
  const dispatch = useDispatch();

  // https://ko-de-dev-green.tistory.com/18 파이어베이스에서 값을 불러오는 것이다.
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);

  // 데이터베이스에서 불러온 값 // useSelector는 state를 조회하기 위해 사용
  const dictionary_data = useSelector((state) => state.dictionary.list);
  console.log(dictionary_data);

  return (
    <Container>
      {/* &&표시는  dictionary_data가 있을 때 하라는 소리*/}
      {dictionary_data &&
        dictionary_data.map((dictionary, index) => {
          return (
            <ConDiv key={index}>
              <Wrap>
                <SecondTitle>단어</SecondTitle>
                <ItemStyle>{dictionary.word}</ItemStyle>
                <SecondTitle>설명</SecondTitle>
                <ItemStyle>{dictionary.account}</ItemStyle>
                <SecondTitle>예시</SecondTitle>
                <ItemStyle style={{ color: "blue" }}>
                  {dictionary.example}
                </ItemStyle>
              </Wrap>
            </ConDiv>
          );
        })}
      <div>
        <Button
          onClick={() => {
            history.push("/add");
          }}
        >
          <i
            style={{
              fontSize: "30px",
              margin: "12px auto",
              color: "white",
            }}
            className="fas fa-plus"
          ></i>
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  left: 0;
`;

const ConDiv = styled.div`
  overflow: scroll;
  width: 300px;
  display: flex;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 16px;
  background: orange;
`;

const Wrap = styled.div`
  height: 300px;
  width: 100%;
  margin: 5px;
`;

const SecondTitle = styled.h5`
  text-decoration: underline;
`;

const ItemStyle = styled.div`
  background: #fdf9f3;
  border-radius: 5px;
  padding: 10px;
`;

const Button = styled.div`
  position: fixed;
  bottom: 70px;
  border: 1px solid black;
  border-radius: 50%;
  width: 60px;
  text-align: center;
  right: 50px;
  margin: auto;
  background: black;
  cursor: pointer;
`;

export default DictionaryList;
