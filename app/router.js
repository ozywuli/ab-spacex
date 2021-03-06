import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('launches');
  this.route('launches-details', { path: '/launches/:id' });
  this.route('rockets');
  this.route('rockets-details', { path: '/rockets/:id' });
});

export default Router;
