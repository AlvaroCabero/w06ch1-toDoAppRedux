import { Stack, Form, Button } from "react-bootstrap";
import React from "react";
import { createToDoThunk } from "../redux/thunks/toDoThunk";
import { useState } from "react";
import { useDispatch } from "react-redux";

const FormRedux = () => {
  const initialData = {
    name: "",
    description: "",
  };
  const [toDoData, setToDoData] = useState(initialData);
  const dispatch = useDispatch();

  const changeToDo = (event) => {
    const input = event.target;
    setToDoData({
      ...toDoData,
      name: input.value,
    });
  };

  const createToDo = (event) => {
    event.preventDefault();

    dispatch(
      createToDoThunk({
        ...toDoData,
      })
    );

    setToDoData(initialData);
  };

  return (
    <Stack gap={2}>
      <Form.Control
        className="me-auto"
        placeholder="Add your new task here..."
        onChange={changeToDo}
      />
      <Form.Control
        className="me-auto"
        placeholder="Add a description here..."
      />
      <Button variant="secondary" onClick={createToDo}>
        Crear
      </Button>
    </Stack>

    // <>
    //   <form
    //     className="form-control form-redux"
    //     autoComplete="off"
    //     // onSubmit={}
    //   >
    //     <div className="form-group">
    //       <label htmlFor="name">Name</label>
    //       <input
    //         type="text"
    //         id="name"
    //         // value={gentlemanData.name}
    //         // onChange={changeData}
    //       />
    //       <label htmlFor="picture">Picture</label>
    //       <input
    //         type="text"
    //         id="picture"
    //         // value={gentlemanData.picture}
    //         // onChange={changeData}
    //       />
    //       <label htmlFor="alternativeText">Description</label>
    //       <input
    //         type="text"
    //         id="alternativeText"
    //         // value={gentlemanData.alternativeText}
    //         // onChange={changeData}
    //       />
    //       <div className="form-check">
    //         <input
    //           className="form-check-input"
    //           type="radio"
    //           name="flexRadioDefault"
    //           id="flexRadioDefault2"
    //           // checked
    //         />
    //         <label className="form-check-label" htmlFor="flexRadioDefault2">
    //           Default checked state
    //         </label>
    //       </div>
    //     </div>
    //     <div className="button-container">
    //       <button type="submit">Create</button>
    //       {/* <pre>{JSON.stringify(gentlemanData, null, 2)}</pre> */}
    //     </div>
    //   </form>
    // </>
  );
};

export default FormRedux;
