import axios from "axios";


//url base
 var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=08788d2b9d8147b5899f2628e9016807";

 export default {
    getNewArticles: function (query, beginYear, endYear) {
    var numResults = 0;
    var articleCounter = 0;
    const queryTerm = "&q=" + query;
    const beginDate = "&begin_date=" + beginYear + "0101";
    const endDate = "&end_date=" + endYear + "0101";
  
    let URL = queryTerm;
  
    if (beginYear && endYear) {
      URL += beginDate + endDate;
    } else if (beginYear) {
      URL += beginDate;
    } else if (endYear) {
      URL += endDate;
    }
    
    return axios.get(queryURLBase + URL);
    }

 }