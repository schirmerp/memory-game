import React from "react";

function CardFrame(props) {

    return(
        <div className="card" onClick={props.onClick}>
            <div className="card-header">
                 {props.title}
            </div>
            <div className="card-body">
                <img
                    id={props.id}
                    style={{
                        maxHeight: "250px",
                        width: "auto"
                    }}
                    src={props.src}
                    alt={props.alt}
                    
                />
            </div>
        </div>
    )
}

export default CardFrame