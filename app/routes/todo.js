import Route from '@ember/routing/route';

export default Route.extend({
	model() {
    return this.store.findAll('todo');
  },
  actions:{
  	removeTodo:function(todo){
  		console.log(this.get('model'));
  		this.get('model').removeItem(todo);
  	}	

  }
});
