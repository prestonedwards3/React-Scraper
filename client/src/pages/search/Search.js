import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Searchbox from '../../components/Searchbox/Searchbox';
import Well from '../../components/Well/Well';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Saved from '../Saved/Saved';
import axios from 'axios';
import NYT from "../../utils/NYT/API";
import API from "../../utils/API/API"

class Search extends Component {
    state = {
        criteria: [
            {id: "query", value: ""},
            {id: "start", value: ""},
            {id: "end", value: ""}
          ],
      result: [],
      showResults: false
    
    };

    searchHandler = (event) => {
        event.preventDefault();
        NYT.getNewArticles(this.state.criteria[0].value, 2009, 2018)
        .then(res =>{
            console.log(res.data.response.docs);
            console.log(res.data);
            console.log(this.state.criteria[0].value);
            for (let i = 0; i < 10; i++){
              let title = res.data.response.docs[i].headline.main;
              let author = res.data.response.docs[i].byline.original;
              let date = res.data.response.docs[i].pub_date;
              let link = res.data.response.docs[i].web_url;
              let summary = res.data.response.docs[i].snippet;
              console.log(res.data.response.docs[i].pub_date);
              console.log(res.data.response.docs[i].byline.original);
              console.log(res.data.response.docs[i].web_url);
            }
        
        this.setState({criteria: [ {id: "query", value: ""},
        {id: "start", value: ""},
        {id: "end", value: ""}],
        results: res.data.response.docs,
        showResults: true })
      });
    };

    handleInputChange = (event, id) => {
      /*
        const criteriaIndex = this.state.criteria.findIndex(criteria => criteria.id === id);
        const criterias = {...this.state.criteria[criteriaIndex]};
        criterias.val = event.target.value;
        const criteria = [...this.state.criteria];
        criteria[criteriaIndex] = criterias
        this.setState({criteria: criteria});
        */
        this.setState({criteria: [ {id: "query", value: event.target.value},
        {id: "start", value: event.target.value},
        {id: "end", value: event.target.value}

        ]})
    };

    handleSaveArticle = (event, id) => {
      event.preventDefault();
      const articleIndex = this.state.results.findIndex(result => result._id === id);
      const article = { ...this.state.results[articleIndex] };
      API.saveArticle({  title: article.headline.main,
        author: article.source,
        summary: article.snippet,
        dateOfArticle: article.pub_date,
        URL: article.web_url } )
    }

    render() {
      
        let searchResults = "Type in a topic and get articles!"
        if (this.state.showResults) {
            searchResults = this.state.results.map((article, index) => {
              return <ArticleCard
                key={article._id}
                articleId={article.headline.main}
                headline={article.headline.main}
                author={article.byline.original}
                date={article.pub_date}
                URL={article.web_url}
                summary={article.snippet}
                action={this.handleSaveArticle}
                title="Save this article" />
            });
          } 
          
        return (
          <div className="container">
            <Jumbotron />
            <Searchbox click={this.searchHandler}  handleInputChange={this.handleInputChange}/>
            <Well >
              {searchResults}
            </Well>
            <Saved />
          </div>
        );
      }
}


export default Search;