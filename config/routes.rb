Rails.application.routes.draw do
  resources :projects, only: [:index]

  match '*unmatched', to: 'application#not_found_method', via: :all

end
