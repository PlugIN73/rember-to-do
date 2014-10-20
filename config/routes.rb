Rails.application.routes.draw do
  resources :todos
  root to: 'application#index'
end
