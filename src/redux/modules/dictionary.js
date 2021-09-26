// dictionary.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const Add = "dictionary/ADD";
const LOAD = "dictionary/LOAD";

const initialState = {
  list: [
    {
      word: "개인과제",
      account: "안녕",
      example: "헬로",
    },
  ],
};

// Action Creators
export const addDictionary = (dictionary) => {
  return { type: Add, dictionary: dictionary };
};

export const loadDictionary = (dictionary) => {
  return { type: LOAD, dictionary: dictionary };
};

// 미들웨어
export const loadDictionaryFB = () => {
  return async function (dispatch) {
    const dictionary_data = await getDocs(collection(db, "dictionary"));
    let dictionary_list = [];
    dictionary_data.forEach((dictionary) => {
      dictionary_list.push({ ...dictionary.data() });
    });
    console.log(dictionary_list);
    dispatch(loadDictionary(dictionary_list));
  };
};

export const addDictionaryFB = (dictionary_list) => {
  return async function (dispatch) {
    const dictionary_db = await addDoc(
      collection(db, "dictionary"),
      dictionary_list
    );
    console.log(dictionary_list);
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "dictionary/LOAD": {
      return { ...state, list: action.dictionary };
    }
    case "dictionary/ADD": {
      const new_dictionary = [...state, action.dictionary];
      return { ...state, list: new_dictionary };
    }
    default:
      return state;
  }
}
