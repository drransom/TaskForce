module Api

  class CommentsController < ApplicationController

    def new
    end

    def index
      @comments = Comment.where(commentable_id: comment_params[:commentable_id],
                                commentable_type: comment_params[:commentable_type])
      render :index
    end

    def create
      @comment = Comment.new(comment_params)
      @comment.commenter_id = current_user.id

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:commentable_id, :commentable_type,
                                      :body)
    end
  end

end
