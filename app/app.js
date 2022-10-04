import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'vassilating-tesseract/config/environment';

/*
<link rel="stylesheet" type="text/css" href="{{rootURL}}/../styles/app.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootURL}}/../styles/toggle-switch.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootURL}}/../styles/fontawesome.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootURL}}/../styles/brands.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootURL}}/../styles/solid.css"/>

*/

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
