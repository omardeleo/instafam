class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.create(follow_params)
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id)
  end
end