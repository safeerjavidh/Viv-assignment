import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  pages: DS.attr(),
  averageRating: DS.attr(),
  image_url: DS.attr(),
  original_publication_year: DS.attr()
});
