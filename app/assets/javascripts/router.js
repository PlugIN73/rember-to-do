(function () {
  'use strict';

  RemberToDo.Router.map(function () {
    this.resource('todos', { path: '/' }, function () {
    });
  });

  RemberToDo.TodosRoute = Ember.Route.extend({
    model: function () {
      return this.store.find('todo');
    }
  });

  RemberToDo.TodosIndexRoute = RemberToDo.TodosRoute.extend({
    templateName: 'todo-list',
    controllerName: 'todos-list'
  });


})();
