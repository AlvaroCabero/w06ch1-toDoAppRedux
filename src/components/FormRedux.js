const FormRedux = () => {
  return (
    <>
      <form
        className="form-control form-redux"
        autoComplete="off"
        // onSubmit={}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            // value={gentlemanData.name}
            // onChange={changeData}
          />
          <label htmlFor="picture">Picture</label>
          <input
            type="text"
            id="picture"
            // value={gentlemanData.picture}
            // onChange={changeData}
          />
          <label htmlFor="alternativeText">state</label>
          <input
            type="text"
            id="alternativeText"
            // value={gentlemanData.alternativeText}
            // onChange={changeData}
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              // checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Default checked state
            </label>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Create</button>
          {/* <pre>{JSON.stringify(gentlemanData, null, 2)}</pre> */}
        </div>
      </form>
    </>
  );
};

export default FormRedux;
