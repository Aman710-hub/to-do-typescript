import React from "react";
import {
  completeToDo,
  uncompleteToDo,
  deleteToDo,
} from "../features/to-do-Slice";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store";
// react icons
import { BsCheck2All } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

const Finished: React.FC = () => {
  const { completedToDos } = useSelector((state: RootState) => state.toDo);
  const dispatch = useDispatch();
  console.log("🚀 ~ completed", completedToDos.length);
  return (
    <Wrapper className="section-center">
      <form>
        <h3>Finished To Does</h3>
        {completedToDos.map((item) => {
          const { text, id, completed } = item;
          return (
            <div key={id} className="container">
              <h4 className={`${completed ? "text underline" : "text "}`}>
                {text}
              </h4>
              <div className="btn-container">
                <BsCheck2All
                  className="check-icon icon"
                  onClick={() => dispatch(uncompleteToDo(id))}
                />
                {/* <FaTrashAlt
                  className="trash-icon icon"
                  onClick={() => dispatch(deleteToDo(id))}
                /> */}
              </div>
            </div>
          );
        })}
        {completedToDos.length <= 0 && (
          <h5 className="finished-to-does">No trashed to does</h5>
        )}
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: #eeededb0;
  margin-top: 3rem;
  display: grid;
  /* grid-template-columns: 1fr auto; */
  padding: 2rem;
  box-shadow: 0 0 10px #03010b6e;
  border-radius: 8px;

  btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .check-icon {
    /* margin-right: 19px; */
    height: 1.2rem;
    color: green;
  }

  .trash-icon {
    color: red;
  }

  .icon {
    cursor: pointer;
    width: 1rem;
    height: 1.1rem;
  }

  .icon:hover {
    opacity: 0.6;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin: 1rem;
    border-radius: 8px;
    padding: 5px 14px;

    h4 {
      margin: 0;
    }
  }

  h3,
  h5 {
    text-align: center;
    margin-bottom: 3rem;
  }

  /* form {
    margin-top: 3rem;
  } */

  .underline {
    text-decoration: line-through;
  }
`;

export default Finished;
