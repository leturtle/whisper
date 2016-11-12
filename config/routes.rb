Rails.application.routes.draw do
  # get 'home/index'
  scope '/api' do
    post 'auth/login'
    post 'auth/register'
    get 'auth', to: 'auth#index'
    get 'chat/sessions', to: 'chat#user_chat_sessions'
    get 'chat/sessions/:id', to: 'chat#user_chat_session'
    get 'chat/users', to: 'chat#users'
    post 'chat/message', to: 'chat#message'
  end

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
