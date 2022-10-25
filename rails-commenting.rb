# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)

# --- 
  # 1) There is a class of BlogPostController that is a child of the ApplicationController.
  # 2) This class has a method called 'index' 

class BlogPostsController < ApplicationController
  def index

# ---2)

    # 1) @post is tied to requesting all the index data in the BlogPost database.
    # 2) It allows us to view the index.

    @posts = BlogPost.all
  end

# ---3)

    # 1) There is a moethod called 'show'
    # 2) it takes in the parameter of the :id key.
    # 3) So this is a method that finds a specific blog post.

  def show
    @post = BlogPost.find(params[:id])
  end

# ---4)

    # 1) There is a method called 'new'
    # 2) This one posts a new blog post.

  def new
    @post = BlogPost.new
  end

    # 3) The one below this is a method called 'create'
  def create
    
# ---5)
    
    # 4) It creates new parameters for the database BlogPost.

  @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit

# ---6)

    # 1) The method 'edit' finds different blog post by :id key.

    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])

# ---7)

    # 1) The method 'update' edits/updates the blog posts if there is one.

    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      
# ---8)

    # 1) the method 'destroy' is used to destroy/delete a specific blog post by its id.

      redirect_to blog_posts_path
    end
  end

# ---9)

  # 1) This private method below is used to hid something. i have no idea.

  private
  def blog_post_params

# ---10)

    # 1) The method 'blog_post_params' is used to require specific parameters, key/value pairs when new instances are created by this class.

    params.require(:blog_post).permit(:title, :content)
  end
end
