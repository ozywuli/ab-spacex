import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  body() {
    return faker.lorem.sentence()
  }
});
