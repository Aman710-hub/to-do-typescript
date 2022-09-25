import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { act } from "react-dom/test-utils";
import React, { useEffect } from "react";

export interface toDo {
  todos: Array<any>;
  completedToDos: Array<any>;
  trashedToDos: Array<any>;
  value: string;
  isEdditing: boolean;
  edditId: number;
}

const initialState: toDo = {
  todos: [],
  completedToDos: [],
  trashedToDos: [],
  value: "",
  isEdditing: false,
  edditId: 0,
};

const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    edditToDo: (state, action) => {
      const spesificItem = state.todos.find(
        (item) => item.id === action.payload
      );
      state.edditId = action.payload;
      state.value = spesificItem.text;
      state.isEdditing = true;
    },
    clearTrash: (state) => {
      state.trashedToDos = [];
    },

    uncompleteToDo: (state, action) => {
      state.completedToDos = state.completedToDos.map((item) => {
        if (item.id !== action.payload) return item;
        const obj3 = { ...item, completed: !item.completed };
        state.todos.push(obj3);
        return obj3;
      });

      state.completedToDos = state.completedToDos.filter((item) => {
        return item.id !== action.payload;
      });
    },

    completeToDo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id !== action.payload) return item; // !!!!!!!!!!!!!!!!
        const obj = { ...item, completed: !item.completed };
        state.completedToDos.push(obj);
        return obj; // !!!!!!!!!!!!!!!
      });
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    deleteToDo: (state, action) => {
      state.todos = state.todos.map((item) => {
        if (item.id !== action.payload) return item;
        const obj2 = { ...item, trashed: true };
        state.trashedToDos.push(obj2);
        return obj2;
      });
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    getValue: (state, action) => {
      state.value = action.payload;
    },
    handleSubmit: (state) => {
      if (state.value === "") return alert("PLEASE ENTER VALUE");
      if (state.isEdditing === true) {
        state.todos = state.todos.map((item) => {
          if (item.id === state.edditId) {
            return { ...item, text: state.value };
          }
          return item;
        });
        state.isEdditing = false;
        state.edditId = 0;
      } else {
        state.todos.push({
          id: new Date().toISOString(),
          text: state.value,
          completed: false,
          trashed: false,
        });
      }
      state.value = "";
    },
  },
});

export const {
  handleSubmit,
  getValue,
  deleteToDo,
  completeToDo,
  uncompleteToDo,
  clearTrash,
  edditToDo,
} = toDoSlice.actions;

export default toDoSlice.reducer;
