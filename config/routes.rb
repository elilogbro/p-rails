Rails.application.routes.draw do
  resources :projects, only: [:index]
  get 'render/index'
  root 'render#index' end
end
