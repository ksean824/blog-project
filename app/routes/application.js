import Ember from 'ember';

export default Ember.Route.extend({
  // called when route is entered
  model() {
        return this.store.findAll('post') 
  }
});
