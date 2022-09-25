import React from "react";
import { clearTrash, deleteToDo } from "../features/to-do-Slice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";

const Trash: React.FC = () => {
  const { trashedToDos } = useSelector((state: RootState) => state.toDo);
  const dispatch = useDispatch();
  return (
    <Wrapper className="section-center">
      <form>
        <h3>Trashed to does</h3>
        <div className="list-container">
          {trashedToDos.map((item) => {
            return (
              <div key={item.id} className="list-item">
                <h4 key={item.id}>{item.text}</h4>
              </div>
            );
          })}
        </div>
        {trashedToDos.length <= 0 && (
          <h5 className="enty-trash">No trashed to does</h5>
        )}
        {trashedToDos.length >= 1 && (
          <a
            className="clear-all-btn myButton"
            onClick={() => dispatch(clearTrash())}
          >
            clrear all
          </a>
        )}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #eeededb0;
  margin-top: 3rem;
  display: grid;
  /* grid-template-columns: 1fr auto; */
  padding: 2rem;
  box-shadow: 0 0 10px #03010b6e;
  border-radius: 8px;

  h3,
  h5 {
    text-align: center;
    margin-bottom: 3rem;
  }

  form {
    /* margin-top: 3rem; */
    position: relative;
  }

  .list-container h4 {
    text-align: center;
    margin: 0;
  }

  .list-item {
    background-color: white;
    border-radius: 7px;
    padding: 5px 14px;
    margin-bottom: 1rem;
  }
  .clear-all-btn {
    position: relative;
    left: 34%;
    margin-top: 3rem;
  }

  /*  */
  .myButton {
    box-shadow: inset 0px 1px 0px 0px #f29c93;
    background: linear-gradient(to bottom, #9c3429 5%, #a20c0c 100%);
    background-color: #fe1a00;
    border-radius: 6px;
    border: 1px solid #d83526;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    /* font-family: Arial; */
    font-size: 19px;
    /* font-weight: bold; */
    padding: 2px 45px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #b23e35;
  }
  .myButton:hover {
    background: linear-gradient(to bottom, #c03737 5%, #fe1a00 100%);
    background-color: #ce0100;
  }
  .myButton:active {
    position: relative;
    top: 1px;
  }
`;

export default Trash;
