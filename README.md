# TaskForce

[Live][live]

[live]: http://taskforce.elliotreed.com

## Summary
TaskForce is a Star Wars-themed app inspired by the user-facing side of [TaskRabbit][taskrabbit] built on Rails and Backbone. The app is styled based on a combination of custom CSS and Twitter Bootstrap.

[taskrabbit]: http://www.taskrabbit.com

Users can:

- [X] Create accounts
- [X] Create sessions (log in)
- [X] Create tasks
- [X] View potential Taskers for a task
- [X] View comments on Taskers
- [X] View an index of all tasks
- [X] Mark tasks as completed
- [X] Review tasks up or down
- [X] Change task votes
- [X] Kill off Taskers when they fail for the last time


### Account Creation and Sessions
I implemented user authentication in Rails based on the practices learned at
App Academy. The splash page/login form is a Rails .erb template. I implemented
a guest login so that users are not required to create an account to use the
app. To allow multiple guests to be logged in at the same time, a new user entry
is created every time the guest login is used.

### Task Creation and User mini-profiles
I started the task process by implementing the new task form. I created a
Rails `Task` class and a corresponding Backbone model, along with a `User` model and
collection to display the potential Taskers. The form page is a Backbone
composite view, comprising two subviews, a `NewTaskForm` view and a `MiniProfile`
view. When the `NewTaskForm` view receives a `submit` event, it sends a GET request
to the Users index. The Rails server returns a JSON representation of the Rails `User`
objects that match the form submit data. The JSON representation is constructed using
JBuilder. The `MiniProfile` view then displays basic information about the members
of the Backbone `Users` collection. Each `User` has a button object allowing the
`User` to be selected for the `Task` and a link to display the `User`'s profile.


### Tasker Detailed Profiles and Comments
I chose to display the `User`'s detailed profile as a modal. I wrote my own custom
modal. To allow the same modal logic to be used for multiple purposes, I created
a `Modal` Backbone view. The `TaskerProfile` view extends the `Modal` view. To
have user comments, I created a Rails `Comment` object.

Triggering the event that creates the `TaskerProfile` view sends a GET request
to the Rails server, which returns both the `User` data and the corresponding
`Comment` data as JSON. The `TaskerProfile` view uses the JSON to update the
`User` object and create a new `Comment` collection of `Comment` objects, all
of which are displayed in the modal profile.

### Task Index
The `Task` index is implemented as a separate Backbone composite of `TaskDetail`
subview. Each `TaskDetail` subview is associated with a `Task` and `User` object.
There is only one Backbone `Users` collection, so tasks with the same Tasker are
all associated with the same Backbone `User`.

The app user can click buttons to mark the task as complete and rate the task.
Clicking the 'rate task' button triggers an event that creates a new `Rating` Backbone
view, which extends the `Modal` view I created earlier. The `Rating` is associated
with both the `User` and `Task` objects, and creates buttons that allow the user
to rate the `Task` up or down.  Rating the task up updates the `Task` rating
and sends a PATCH request to the Rails server to update the `Task` object.

### Tasker Failure
TaskForce guarantees a 100% satisfaction rating and guarantees that if a Tasker
fails, they fail for the "last time." However, actually killing off Taskers would cause
the app to become unusable quite rapidly. Consequently, the Tasker death is implemented
as an illusion!

When the user downvotes a task in the `Rating` Backbone view, the `Task` is updated
and the `User` Backbone model is updated to indicate that the Tasker has been killed
off. The Rails back end implements this by using a `Killing` join table
to indicate which `Users` have killed which other `Users`. The JSON provided by
the Rails server reflects the Rails `Killing` join table rather than any entry
in the `User` database, and the Backbone model for a `User` has an `alive`
boolean property even though Rails does not. Consequently, each user has their
own perception of which Taskers are and are not alive.

## Original Design Docs
* [View Wireframes][views]
* [DB schema][schema]

* [Phase One: User Authentication and Task Creation][phase-one]
* [Phase Two: Viewing Taskers][phase-two]
* [Phase Three, Updating, and Displaying Tasks][phase-three]
* [Phase Four: Viewing Task Feed][phase-four]
* [Phase Five: User Reviews][phase-five]
* [Stretch Goal][stretch]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[stretch]: ./docs/phases.stretch.md
