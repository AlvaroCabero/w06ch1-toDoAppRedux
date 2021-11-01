const DisplayRedux = () => {
  return (
    <>
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Content</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name</li>
          <li className="list-group-item">Detail</li>
          <li className="list-group-item">Description</li>
        </ul>
        <div className="card-body">
          {/* <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a> */}
        </div>
      </div>
    </>
  );
};

export default DisplayRedux;
