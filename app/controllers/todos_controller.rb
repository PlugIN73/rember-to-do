class TodosController < ApplicationController
  respond_to :json

  def index
    respond_with Todo.all
  end

  def show
    respond_with Todo.find(params[:id])
  end

  def create
    respond_with Todo.create(todo_params)
  end

  def update
    todo = Todo.find(params[:id])
    respond_with todo.update_attributes(todo_params)
  end

  def destroy
    respond_with Todo.destroy(params[:id])
  end

  private
  def todo_params
    params.require(:todo).permit(:title, :is_completed)
  end
end
