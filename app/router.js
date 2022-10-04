import EmberRouter from '@ember/routing/router';
import config from 'vassilating-tesseract/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('resume');
  this.route('bio', { path: '/' });
  this.route('blog');
});
