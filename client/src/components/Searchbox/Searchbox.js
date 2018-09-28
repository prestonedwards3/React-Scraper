import React from "react";

const Searchbox = (props) => {

    return ( 
    <div className="row">
    <div className="col-lg-12">
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title">Search Parameters</h3>
  
            <div className="panel-body">
                    <form >
                        <div className="form-group">
                          <label for="search">Search Articles:</label>
                          <input type="text" className="form-control" id="query" onChange={props.handleInputChange} value={props.value}/>
                          
                        </div>

                        <div className="form-group">
                          <label for="Start Year">Start Year:</label>
                          <input type="text" className="form-control" id="startYear" onChange={props.handleInputChange} value={props.value} />
                        </div>
                        <div className="form-group">
                                <label for="End Year">End Year:</label>
                                <input type="text" className="form-control" id="endYear" onChange={props.handleInputChange} value={props.value} />
                              </div>
                        
                        <button type="submit" className="btn btn-default" id="searchButton" onClick = {props.click}>Search</button>
                        <button type="submit" className="btn btn-default">Clear</button>
                      </form>
            </div>
        </div>
    </div>
</div>
</div>
)};

export default Searchbox;
