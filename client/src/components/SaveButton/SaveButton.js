import React from "react";


const SaveButton = (props) => {
    return( 
    <div>
        <button type="submit" class="btn btn-success" onClick={props.clicked}>Save Article </button>

    </div>
)};

export default SaveButton;