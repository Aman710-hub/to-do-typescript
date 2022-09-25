import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ToDoList from "../components/ToDoList";
import { useSelector, useDispatch } from "react-redux";
import { handleSubmit, getValue } from "../features/to-do-Slice";
import type { RootState } from "../store";

const Main: React.FC = () => {
  const { todos, value, isEdditing } = useSelector(
    (state: RootState) => state.toDo
  );

  const dispatch = useDispatch();

  return (
    <Wrapper className="section-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleSubmit());
        }}
      >
        {/* <Navbar /> */}
        <h2 className="title">To Do</h2>
        <div className="form-control">
          <input
            value={value}
            type="text"
            placeholder="add item"
            className="input"
            onChange={(e) => {
              e.preventDefault();
              dispatch(getValue(e.target.value));
            }}
          />

          <button type="submit" className="submitBtn">
            {isEdditing ? "eddit" : "submit"}
          </button>
        </div>
      </form>
      <div className="list-container">
        <ToDoList />
        {/* <button onClick={() => dispatch(increment())}>inc</button>
        <span>{value}</span>
        <button onClick={() => dispatch(decrement())}>dec</button> */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #eeededb0;
  /* background-color: #6c5b7b; */
  margin-top: 3rem;
  display: grid;
  /* grid-template-columns: 1fr auto; */
  padding: 2rem;
  border-radius: 13px;
  box-shadow: 0 0 10px #03010b6e;

  .title {
    text-align: center;
    margin-bottom: 3rem;
    color: dark;
  }

  .form-control {
    margin: 0 auto;
    max-width: 30rem;
    display: flex;
    justify-content: center;
  }

  form {
    margin-bottom: 3rem;
  }

  .input {
    flex: 1 0 auto;
    font-size: 1.5rem;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    border: none;
    padding-left: 15px;
    padding: 0.5rem;
  }

  .submitBtn {
    padding: 15px;
    letter-spacing: 2px;
    text-transform: capitalize;
    border: none;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
    background-color: #88b569;
    cursor: pointer;
  }
`;

export default Main;
