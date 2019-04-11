Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :destroy, :show, :index, :update] do
      resources :likes, only: [:create, :destroy]
      resources :comments, only: [:create, :index]
    end
    # resources :follows, only: [:create]
    resources :comments, only: [:destroy]
  end
  
  root 'static_pages#root'
end
