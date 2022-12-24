Rails.application.routes.draw do
  resources :projects, only: [:index]
  get 'render/index'
end
