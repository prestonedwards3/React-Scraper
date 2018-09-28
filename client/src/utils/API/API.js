import axios from 'axios'
import Search from '../../pages/search/Search'




export default {

    getArticles: function() {
        return axios.get('/api/articles');
    },
    getArticle: function() {
        return axios.get('/api/article'  ); //+id
    },
    deleteArticle: function(id) {
        return axios.delete('/api/article'+ id ); //
    },
    saveArticle: function(data) {
        return axios.post('/api/articles', data ) //
    }
};