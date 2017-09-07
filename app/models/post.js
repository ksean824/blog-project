import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  publishDate: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
