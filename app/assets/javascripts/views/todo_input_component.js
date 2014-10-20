(function () {
  'use strict';

  RemberToDo.TodoInputComponent = Ember.TextField.extend({
    focusOnInsert: function () {
      this.$().val(this.$().val());
      this.$().focus();
    }.on('didInsertElement')
  });
})();
