import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('members', function() {
    this.route('member', {
      path: ':login'
    });
  });
  this.route('repos', function() {
    this.route('repo', {
      path: ':repo_name'
    });
  });
});

export default Router;
