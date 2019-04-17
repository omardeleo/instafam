class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.follower_id = params[:follower_id]
    @follow.followee_id = params[:user_id]

    if @follow.save
      @users = User.where(:id => [params[:user_id], params[:follower_id]])
      render 'api/users/index'
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(follower_id: params[:follower_id], followee_id: params[:followee_id]).first
    
    if @follow
      @follow.destroy!
      @users = User.where(:id => [params[:followee_id], params[:follower_id]])
      render 'api/users/index'
    else
      render json: ["invalid action"]
    end
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :followee_id, :user_id)
  end
end

