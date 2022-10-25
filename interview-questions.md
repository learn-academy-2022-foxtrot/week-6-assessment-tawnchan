# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer:
    
    1) Foreign keys are bindings of two or more databases. 
    2) Foreign keys are used to refer to the Primary key model. 
    3) Primary keys are in the Parent model and Foreign keys are in the child model. 
    4) I forgot how to add the foreign key once its forgotten, 
        but I think we can add it through terminal using db:create and then db:merging. 
    5) In regards to the name of the Foreign key, it is whatever we name it, it could be a string or an integer. 
    6) Foreign keys will be in the Student model, which would be the child model.

Researched answer:

    1) Foreign keys can be created using migrations, or Active Record Migrations.
    2) Initially a migration file is created using terminal rails generate migration...
    3) 

1. Which RESTful routes must always be passed params? Why?

Your answer:

    1)  RESTful routes are GET, PUT, POST, PATCH, TRACE, and DELETE.
    2)  For most of these routes require parameters to locate the specific data.
    3)  We need to locate the specific data in order to access them for manipulation.
    4)  I think PUT is the only one that doesn't require parameters because when we pass new put data, we are already assigning it to a specific location key. 

Researched answer:

    1) Rails router recognizes URLs and dispatches them to a controller’s action. 
    2) It can also generate paths and URLs.
    3) This avoids the need to hardcode strings in views.
    4) It is a route structure to be used to route between server and client.

3. Name three rails generator commands. What is created by each?

Your answer:

    rails generate 
    rails generate model
    rails generate controller

Researched answer:'

    rails generate resources. I had to ask some team mates, but this will give us files such as ActiveRecord, controllers, routes, and Application records in our database

    

1. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students

    a: This is an Index Method for getting all the students. I think it would be an array of objects with key: value pairs.

action: "POST" location: /students

    a: This Create method that adds new information to the students model.

action: "GET" location: /students/new

    a: This is used to create a new student using a New Method.

action: "GET" location: /students/2

    a: This is a Show method that shows a specific student, In thid case, its student in the index of 2.

action: "GET" location: /students/2/edit

    a: This is an Edit Method used to edit a model of a specific student.

action: "PATCH" location: /students/2

    a: This is used to update specific data for the specific data.
        What is the difference between Path and Get?

action: "DELETE" location: /students/2

    a: This is used to delete a specific student.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1) As a User, I can create a new database for my app.
2) As a User, I can see my new database list of 'to-do'
3) As a User, I can add new components to my list
4) As a User, I can edit components in my database
5) As a User, I can delete components in my database
6) As a User, I can view components in my database
7) As a User, I can share my database with others
8) As a User, I can post my database
9) As a User, I can migrate my database with another
10) As a User, I can access other people's databases with their consent