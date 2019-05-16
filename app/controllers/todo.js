import Controller from '@ember/controller';

export default Controller.extend({
  newTask:'',
  actions:{
  	removeTodo:function(todo){
  		var _this = this;
  		todo.destroyRecord();
  	},
  	addTodo:function(){
  		var _this=this;
  		var todo = this.store.createRecord('todo', {
        task: _this.get('newTask'),
        completed: false,
        taskno: _this.get('model').length+1,
        isEditable:false,
      });
  	  this.set('newTask','');
      this.get('model').toArray().pushObject(todo);
  	}	
  }
});
