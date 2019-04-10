class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.liker_id = current_user.id
    @like.post_id = params[:post_id]

    if @like.save
      @post = @like.post
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(liker_id: current_user.id, post_id: params[:post_id])

    if @like
      @like.destroy!
      @post = @like.post
      render 'api/posts/show'
    else
      render json: ["invalid action"]
    end
  end
end