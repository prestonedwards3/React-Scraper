import React from "react";
import '../ArticleCard/ArticleCard.css';
import SaveButton from '../SaveButton/SaveButton';

const ArticleCard = (props) => {

    return ( 
    <div className="card-body col-lg-12" id={props.articleId}>
     
    <h3 className="articleHeadline">
      <strong>{props.headline}</strong>
    </h3>
    <h5> {props.author}</h5>
    <h5> {props.date}</h5>
    <p> {props.summary}</p>
    <button className="btn btn-primary" ><a href={props.URL} target="_blank">Read Article</a></button>
    <SaveButton title={props.title} clicked={(event) => props.action(event, props.articleId)} /> 
  </div>
    
  )};

export default ArticleCard;