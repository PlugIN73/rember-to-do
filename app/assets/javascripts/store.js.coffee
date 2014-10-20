# http://emberjs.com/guides/models/#toc_store
# http://emberjs.com/guides/models/pushing-records-into-the-store/

RemberToDo.Store = DS.Store.extend({
  adapter: '-active-model'

})

# Override the default adapter with the `DS.ActiveModelAdapter` which
# is built to work nicely with the ActiveModel::Serializers gem.
RemberToDo.ApplicationAdapter = DS.ActiveModelAdapter.extend({

})
