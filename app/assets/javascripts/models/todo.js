(function () {
  'use strict';

  RemberToDo.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
  });
})();
