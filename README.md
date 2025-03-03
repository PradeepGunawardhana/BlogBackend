# Express.js Blog API

A simple RESTful API for a blog application built with Express.js and MongoDB.

-----------------------------------------------------------

## Installation

Follow these steps to set up the project locally and Installation:

1. **Clone the repository**:

   git clone https://github.com/PradeepGunawardhana/BlogBackend.git



2. **Navigate to the project directory**:

    cd projectnew

3. **Install dependencies**:

    npm install

4. **Set up environment variables**:

    Create a " .env " file in the root directory.

    Add the following variables: 
    
    MONGODB_URL=mongodb://localhost:27017/Blog
    PORT=5000
    JWT_SECRET=secretkey


Note: The MONGODB_URL should be set up using MongoDB Compass or any MongoDB instance.

    
4. **Setup DATABASE**:    

    Database Name : Blog
    Collections : users and posts   ( These will be created automatically, no manual setup required.)

5. **Run the server**:     

    npm run dev




## API Enpoints

**User Registration**
POST /api/register

    Request Body:

    {
        "userName": "user1",
        "email": "user1@example.com",
        "password": "password"
    }


-----------------------------------------

**User Login**

POST /api/login

    Request Body:

    {
        "email": "user1@example.com",
        "password": "password"
    }

    Response: Returns a JWT token for the logged user.


--------------------------------------------

**Create Post**

POST /api/posts

    Header [ Key : Authorization   value : Bearer <Token> ]

    example for value :- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9

    Request Body:
    {
        "title": "this is title 1",
        "content": "this is content 1"
    }



--------------------------------------------
**Get All Posts**

GET /api/posts

    Header [ Key : Authorization   value : Bearer <Token> ]

    example for value :- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9


------------------------------------------------

**Get Single Post by id**

GET /api/posts/67c5c84c4720f6c687342149

    Note:  make sure to add post ID at the end of the URL

    (  localhost:5000/api/posts/post id here   )
    -------------------------------------------------

    Header [ Key : Authorization   value : Bearer <Token> ]

    example for value :- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9


----------------------------------------------------------------------------

**Update Post by ID**

PUT /api/posts/67c5c36dd4cfffc35fcfa304

    Note:  make sure to add post ID at the end of the URL

    (  localhost:5000/api/posts/post id here   )
    -------------------------------------------------

    Header [ Key : Authorization   value : Bearer <Token> ]

    example for value :- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9


    Request Body:

{
    "title": "this is Updated Title",
    "content": "this is Updated content"
}



**Delete Post by ID**

DELETE /api/posts/67c5c84c4720f6c687342149

    Note:  make sure to add post ID at the end of the URL

    (  localhost:5000/api/posts/post id here   )
    -------------------------------------------------

    Header [ Key : Authorization   value : Bearer <Token> ]

    example for value :- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9


    Notes: 
        Tokens are expires withing 1 hour
        Ensure you replace {postId} in the URLs with an actual post ID.
