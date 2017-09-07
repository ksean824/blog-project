import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createNewPost() {
      console.log('publishDate=' + this.get('publishDate'))
      this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        publishDate: this.get('publishDate')
      }).save();
      Ember.set(this, 'title', '')
      Ember.set(this, 'body', '')
    },
    deletePost(post) {
      post.destroyRecord()
    },
    onPostBodyKeyUp() {
      var bodyContent = this.get('body');
      var bodyElement = document.getElementById('newPostBody');
      var percentUsed = (bodyContent.length / bodyElement.maxLength);
    //  alert(bodyContent.length / bodyElement.maxLength);
      if (percentUsed >= .95) {
        bodyElement.style.backgroundColor = '#ffadb6'
      }
      else if (percentUsed >= .9) {
        bodyElement.style.backgroundColor = '#fff6ad'
      }
      else {
        bodyElement.style.backgroundColor = 'white'
      }
    }
  }
});
