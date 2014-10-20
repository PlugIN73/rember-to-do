(function () {
  'use strict';

  RemberToDo.TodosController = Ember.ArrayController.extend({
    actions: {
      createTodo: function () {
        var title, todo;
        title = this.get('newTitle').trim();
        if (!title) {
          return;
        }
        todo = this.store.createRecord('todo', {
          title: title,
          isCompleted: false
        });
        todo.save();

        this.set('newTitle', '');
      },
    }
  });
})();

