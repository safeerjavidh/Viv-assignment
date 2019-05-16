import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
isEditing: false,
  actions: {
    editTodo: function() {
      this.set('isEditing', true);
    },
    cancel: function() {
      this.set('isEditing', false);
      this.get('model').rollback();
    },
    updateTodo: function(todo) {
      console.log();
      debugger;
      var _this=this;
      this.set('isEditing',false);
      this.onConfirm();
      // this.get('model').pushObject();



      // var todo = this.get('content');
      // var _this = this;
      // todo.save().then(function(){
      //   _this.notify.info('todo item updated');
      //   _this.set('isEditing', false);
      // });
    },
  }
});




