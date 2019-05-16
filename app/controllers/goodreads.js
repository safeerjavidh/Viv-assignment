import Controller from '@ember/controller';

export default Controller.extend({
	searchTerm:'',
  actions:{
    search:function(){
      let searchKey = this.get('searchTerm');
      this.set('searchTerm','');
      var http = new XMLHttpRequest();
      var url = " https://www.goodreads.com/search/index.xml";
      var params = "q="+searchKey+"&key=dx0vxOcRv1B9TIWkRhk9w";
      http.open("GET", url+"?"+params, true);
      http.setRequestHeader("Access-Control-Allow-Origin","*");
      http.send(null);
    }
  }
});
