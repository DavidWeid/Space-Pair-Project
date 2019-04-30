import React from "react";

export function Input(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props} />
        </div>
    );
}

export function TextArea(props) {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="3" {...props} />
        </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} className="btn post-btn">
            {props.children}
        </button>
    );
}