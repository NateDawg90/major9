Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:index, :show, :create, :update, :destroy] do
      resources :tracks, only: [:index, :show, :create, :update, :destroy]
    end
    resources :track_files, only: [:create, :update, :destroy]
    get "signed_url", to: "track_files#sign_url"
  end

  root "static_pages#root"
end
