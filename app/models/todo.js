import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	task: DS.attr('string'),
  	completed: DS.attr('boolean',{defaultValue: false}),
  	taskno:DS.attr(),
  	isEditable:DS.attr('boolean')
});
