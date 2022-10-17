import Model, { attr } from '@ember-data/model';

export default class ArticleModel extends Model {
  @attr title;
  @attr subtitle;
  @attr date;
  @attr content;
  @attr type;

}
