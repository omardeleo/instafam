class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def index
    @comments = Comment.all
  end

  def create
    @comment = Comment.new
    @comment.post_id = params[:post_id]
    @comment.body = params[:body]
    @comment.author_id = current_user.id
    if @comment.save
      @post = @comment.post
      render :show
    else
      render json: @comment.errors.full_messages, status: 400
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])

    if @comment.destroy
      render :show
    else
      render json: @comment.errors.full_messages, status: 401
    end
  end

end