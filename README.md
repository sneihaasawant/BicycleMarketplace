# Bicycle Marketplace
( MEAN application )

**Scope:**
Build a website that offers a marketplace for used bikes.
Implemented multi-page website from scratch (using RESTful routing/Web APIs, MVC, user authentication (login/registration), front and backend validations, backend DB with basic CRUD) Focus was to integrate multiple APIs into project and move the item through front end to back end.

## Environment :
```
Framework : AngularJS ( Angular.js , Express.js and promises )
Database : Mongoose
Languages : JavaScript , TypeScript
```
*PS : Projecr created within 3.00 - 4.00 hrs timeframe. Project focus was on implementation, logic. No CSS framework has been used here.*

## Features : 

1. Register:
    - User should able to register sucessfully.
    - Invalid registration should present the user with errors under the respective input with the error
    - 'Register' button should be disabled until all fields have at least some content in them
    - On successful register, redirect the user to '/dashboard'
            
2. Login:
    - User should able to login sucessfully with correct email and password
    - Invalid login hould generate the message "Invali credentials"
    - After the 5th attempt , restrict the user from being able to re-attempt to login for 1 hour ( Coding is In-Progress)
    - On successful login, redirect the user to '/dashboard'
            
3. Marketplace Dashboard ( Browse ):
    - Search Bar : Search bar should limit the list by matching the title name. User should see the list filter in real time.
    - Display List of available bicycles for sale.
    - Bicycle Post:
      - Display Title , description , price and location
      - **Contact** : A button should be available to see contact details. ( pop-up or alert or webpage )
      - **Delete** : User can delete his own post . 'Delete' button will be avilable on replacement of the 'Contact' button
      
4. My Listings:
    - Create Listings :
      - A form should be avilable to create new listing
      - title, description,price (Min $1), location
      - **Create** : Should clear the form and add a new listing in our 'Edit/Delete Listings' section
      
     - Edit/Delete Listings:
       - Display list of listings created by logged user.
       - Each post should have option for edit and display 
       - **Edit** : User should able to update specific listing
        - **Delete** : User should able to delete the listings from the list.
        
 5. Log out : User should able to logout anytime / on anypage of the website
 
 6. Browse , My listings option should abe avilable in navbar
      
