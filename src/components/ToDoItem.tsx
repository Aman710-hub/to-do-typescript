import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, completeToDo, edditToDo } from "../features/to-do-Slice";
import styled from "styled-components";
// react icons
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { BsCheck2All } from "react-icons/bs";

const ToDoItem: React.FC = (prop: any) => {
  const dispatch = useDispatch();
  return (
    <Wrapper className="singleItem">
      <h4 className={`${prop.completed ? "text" : "text underline"}`}>
        {prop.text}
      </h4>
      <div className="btn-container">
        <BsCheck2All
          onClick={() => dispatch(completeToDo(prop.id))}
          className="checked-icon icon"
        />
        <FiEdit
          className="eddit-icon icon"
          onClick={() => dispatch(edditToDo(prop.id))}
        />

        <FaTrashAlt
          className="trash-icon icon"
          onClick={() => dispatch(deleteToDo(prop.id))}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* background-color: #0aa1dd; */
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 14px;
  border-radius: 8px;
  margin-bottom: 1rem;
  word-break: break-all;

  .text {
    margin: 0;
  }

  .eddit-icon {
    margin: 0 19px 0 19px;
  }

  .trash-icon {
    color: #c02828;
  }

  .checked-icon {
    color: green;
  }

  .checkbox-input {
    width: 40px;
    height: 40px;
  }

  .icon {
    width: 1.1rem;
    height: 1.1rem;
    cursor: pointer;
  }

  .icon:hover {
    opacity: 0.6;
    /* color: #efefef; */
  }

  .btn-container {
    display: inline-block;
  }
`;

export default ToDoItem;
