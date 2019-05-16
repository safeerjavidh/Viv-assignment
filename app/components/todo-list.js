import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  completed: function(key, value) {
    var todo = this.get('model');
    var _this = this;
    if(value === undefined) {
      return todo.get('completed');
    } else {
      todo.set('completed', value);
      todo.save().then(function(){
        if(value) {
          _this.notify.info('task ' + todo.get('task') + ' completed');
        }
      });
      return value;
    }
  }.property('this.rental.completed'),
  actions: {
    editTodo: function() {
      this.get('model').set('isEditable',true);
    },
    cancel: function() {
      this.get('model').set('isEditable',false);
      // this.get('model').rollback();
    },
    updateTodo: function(todo) {
      this.get('model').set('isEditable',false);
    },
    removeTodo:function(todo){
    	this.onConfirm();
    },
  }
});




