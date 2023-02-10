import React from "react";

function Card({data}) {
  return (
    <div className="col-4 mb-2"> 
      <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
           {data.description}
          </p>
          <p className="card-text">
           {data.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
