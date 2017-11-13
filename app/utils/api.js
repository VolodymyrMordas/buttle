import Axios from 'axios';


module.exports = {
   fetchPopularRepos : function(language){
       const encodedUrl = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');
       return Axios.get(encodedUrl)
           .then(function (res) {
                return res.data.items;
           });
   },

   getRepository : function(owner, repo){
       const encodedUrl = window.encodeURI('https://api.github.com/repos/' + owner + '/' + repo);
       return Axios.get(encodedUrl)
           .then(function (res) {
               return res.data.items;
           });
   }
};