# Phase 2: Viewing Taskers

## Rails
### Models

### Controllers
Api::UsersController (show)
Api::PostsController (create, destroy, show, update)

### Views
* users/show.json.jbuilder

## Backbone
### Models
* Blog (parses nested `posts` association)
* Post

### Collections
* Blogs
* Posts

### Views
* BlogForm
* BlogShow (composite view, contains PostsIndex subview)
* PostsIndex (composite view, contains PostsIndexItem subviews)
* PostsIndexItem
* PostShow

## Gems/Libraries
