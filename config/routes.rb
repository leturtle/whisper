Rails.application.routes.draw do
  # get 'home/index'
  scope '/api' do
    post 'auth/login'
    post 'auth/register'
  end

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
