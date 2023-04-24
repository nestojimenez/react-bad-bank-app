# ATM APP

This project was setup with [Create React App](https://github.com/facebook/create-react-app).


## Project description
The purpose of this application is to demostrate de use of different react tools.

useHistory hook is use to navigate and to move from intro page to a home page where the user will be ask to go to login or create user, on create login the user will be able to log in if proper name and password are enter, if login is successful a loged user will be store, to handle the loged user I am using a customHook, in case user has not a current user and password he can crate one on Create Account, here user will enter name, email and password, all users are store on a variable users that use useState Hook and is pass thru all the components on the application using UserContext. 

Deposit.- Here the user can make a deposit, deposits needs to be a positive number, all deposits will be added to the user balance, balance is shown on the deposit card.

Withdraw.- Here user can make a withdraw, this field needs to be a positive number and not grater than curren balance, all withdraws will modify user balance.

Balance.- Here you can look at your current Balancce.

AllData.- Here you can track all users data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Tools used

This project was developed on React, here I demotrate the proper use of ReactRouter, setUse Hook, useHistory Hook.
I also used bootstrap. I used React Components.

## Next steps

I will include the use of Formik.


