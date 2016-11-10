class ChatController < ActionController::API
  before_action :authenticate_token

  def index
    render json: { username: @current_user.username, token: @current_user.persistence_token }
  end


  private

  def authenticate_token
    @current_user = authenticate(params[:token])
    render json: { username: '', token: '' } unless @current_user
  end

  def authenticate(token)
    User.find_by(persistence_token: token)
  end
end
