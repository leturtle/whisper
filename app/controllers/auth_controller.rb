class AuthController < ActionController::API

  def index
    user = User.find_by(persistence_token: params[:token])
    if user
      render json: { username: user.username, token: user.persistence_token }
    else
      render json: { username: '', token: '' }
    end

  end

  def login
    user = User.find_by(username: params[:username])
    if user && user.valid_password?(params[:password])
      render json: {
        username: user.username, token: user.persistence_token
      }
    else
      render json: { username: params[:username], token: '' }
    end

  end

  def register
    user = User.create(
      username: params[:username],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if user && user.persisted?
      render json: {
        username: user.username, token: user.persistence_token
      }
    else
      render json: { username: params[:username], token: '' }
    end

  end
end
