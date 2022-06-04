import { useState } from "react";

export default function Card(props){
    return (
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={props.item.imageUrl}
              className="img-fluid rounded-start h-100 w-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.item.title}</h5>
              <p className="card-text">{props.item.content}</p>
              <div className="d-flex flex-row justify-content-between">
                <p className="card-text">
                  <small className="text-muted">{props.item.date}</small>
                </p>
                <p>
                  <a
                    className="btn btn-primary"
                    href={props.item.readMoreUrl}
                    target="_blank"
                  >
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
