import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";

const Well = (props) => {
    return ( 
    <div className="row">
    <div className="col-lg-12">
            <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search Results</h3>
                    </div>
                    <div className="panel-body" >
                        {props.children}
                        
                    </div>

                </div>
    </div>
</div>
    )};

    export default Well;