class ChatChannel < ApplicationCable::Channel
  def subscribed
    user = User.find_by(persistence_token: params[:token])
    stream_from "chat:#{user.id}"
  end
end
