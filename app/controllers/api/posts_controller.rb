class Api::PostsController < ApplicationController
  def index
    if params[:id]
      @posts = Post.where(author_id: params[:id])
    else
      @posts = Post.where.not(author_id: current_user.id)
    end
    render :index
  end

  def create
    @post = Post.create(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      render :show
    else
      render json: @post.errors.full_messages, status: 400
    end
  end

  def update

  end

  def show
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:author_id, :caption, :location)
  end
end