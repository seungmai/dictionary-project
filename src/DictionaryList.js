import React from "react";

import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// 여기서부터해야됨!
import { loadDictionaryFB } from "./redux/modules/dictionary";

const DictionaryList = ({ list }) => {
  const history = useHistory();
  // const global_lists = list;
  // console.log(global_lists);
  //const global_lists = useSelector((state) => state.dictionary.list);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadDictionaryFB());
  }, []);

  const dictionary_data = useSelector((state) => state.dictionary.list);

  console.log(dictionary_data);
  return (
    <div>
      {dictionary_data &&
        dictionary_data.map((dictionary, index) => {
          return (
            <div key={index}>
              <Wrap>
                <SecondTitle>단어</SecondTitle>
                <ItemStyle>{dictionary.word}</ItemStyle>
                <SecondTitle>설명</SecondTitle>
                <ItemStyle>{dictionary.account}</ItemStyle>
                <SecondTitle>예시</SecondTitle>
                <ItemStyle>{dictionary.example}</ItemStyle>
              </Wrap>
            </div>
          );
        })}
      <Button
        onClick={() => {
          history.push("/add");
        }}
      >
        <i
          style={{
            fontSize: "30px",
            margin: "12px auto",
            color: "orange",
          }}
          className="fas fa-plus"
        ></i>
      </Button>
    </div>
  );
};

const Wrap = styled.div``;

const ItemStyle = styled.div``;

const SecondTitle = styled.h5``;

const Button = styled.div``;

export default DictionaryList;
