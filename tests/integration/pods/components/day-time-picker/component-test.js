import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('day-time-picker', 'Integration | Component | day time picker', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{day-time-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#day-time-picker}}
      template block text
    {{/day-time-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
