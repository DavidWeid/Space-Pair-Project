import React from "react";
import "./style.css"

// This is just for showing what some of the pics are that we are going to get back

const ExampleCall = (props) => {
  console.log(props.photos);
  return (
    <div className="container">
      {props.photos.length > 0 ? (
        <div>
          {props.photos.map(pic => (
            <img src={pic.img_src} alt="rover pic" key={pic.id} />
          ))}
        </div>

      ) : (
          <div>
            <h2>No pics here</h2>
          </div>
        )}
    </div>
  )
}

export default ExampleCall;