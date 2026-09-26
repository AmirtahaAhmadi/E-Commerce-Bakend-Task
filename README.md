## General Structure

- main.js --> this is the main file of project
- .env | .env.example --> public variables
- prisma --> general and migrations folder and schema.prisma of project
- src/routes --> routes are foldered here
- src/controllers --> controllers are foldered here
- src/middlewares --> middlewares of project
- src/utils --> utils of project
- src/validators --> validators of project
- src/uploads --> uploaded files

## APIs

# auth

- POST /api/auth/login --> for login
  this endpoint on success returns status 200 and on failure returns status 400 for bad request and status 404 for invalid email

- POST /api/auth/register --> for register
  this endpoint on success returns status 201 and on failure returns status 409 for existed email

# users

- GET /api/users/profile --> for get current user profile
  this endpoint on success returns status 200

- POST /api/users/:id/role --> for give role to user
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id and status 409 for existed role for user

--------------- user images

- GET /api/users/images --> for get current user images
  this endpoint on success returns status 200

- POST /api/users/images --> for add images to current user
  this endpoint on success returns status 201 and on failure returns status 404 for invalid id and status 400 for bad request

- DELETE /api/users/:id/images --> for delete an image of current user
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

---------------- user favorites

- GET /api/users/favorites --> for get current user favorites
  this endpoint on success returns status 200

- POST /api/users/:id/favorites --> for add favorite product to current user
  this endpoint on success returns status 201 and on failure returns status 404 for invalid id and status 409 for existed record

- DELETE /api/users/:id/favorites --> for delete a favorite record of current user
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

# categories

- GET /api/categories --> for get all categories
  this endpoint on success returns status 200

- GET /api/categories/:id --> for get category details
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

- GET /api/categories/:id/products --> for get category products
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

- POST /api/categories --> for create category
  this endpoint on success returns status 201 and on failure returns status 409 for existed category name

- PUT /api/categories/:id --> for update category
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id and status 409 for existed category name

- DELETE /api/categories/:id --> for delete category
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

# products

- GET /api/products --> for get all products
  this endpoint on success returns status 200

- GET /api/products/:id --> for get product details
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

- POST /api/products --> for create product
  this endpoint on success returns status 201

- PUT /api/products/:id --> for update product
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

- DELETE /api/products/:id--> for delete product
  this endpoint on success returns status 200 and on failure returns status 404 for invalid id

- POST /api/products/:id/images --> for add images to product
  this endpoint on success returns status 201 and on failure returns status 404 for invalid id and status 400 for bad request
