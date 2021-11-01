const ToDo = (toDo) => {
  return (
    <>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{toDo.name}</h5>
          <p className="card-text">Description</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{toDo.description}</li>
        </ul>
        {/* <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div> */}
      </div>
    </>
  );
};

export default ToDo;
