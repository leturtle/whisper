Rails.application.routes.draw do
  # get 'home/index'
  scope '/api' do
    post 'auth/login'
    post 'auth/register'
    get 'auth', to: 'auth#index'
    get 'chat/sessions', to: 'chat#user_chat_sessions'
    get 'chat/sessions/:id', to: 'chat#user_chat_session'
    delete 'chat/sessions/:id', to: 'chat#hide_user_chat_session'
    get 'chat/sessions/uid/:uid', to: 'chat#user_chat_session_by_user_id'
    get 'chat/users', to: 'chat#users'
    post 'chat/message', to: 'chat#message'
    delete 'chat/messages/:id', to: 'chat#delete_message'
  end

  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
