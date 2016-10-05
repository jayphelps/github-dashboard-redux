/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'frontside-container',
  'Integration: FrontsideContainerComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#frontside-container}}
      //     template content
      //   {{/frontside-container}}
      // `);

      this.render(hbs`{{frontside-container}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
