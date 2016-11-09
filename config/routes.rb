Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index, :show, :create, :update, :destroy] do
      resources :tracks, only: [:index, :show, :create, :update, :destroy]
    resources :track_files, only: [:create, :update, :destroy]
    end
  end

  root "static_pages#root"
end
