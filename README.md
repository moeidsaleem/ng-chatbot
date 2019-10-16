# Angular ChatBot 

The Project involves a goal tracking web application done by a chatbot. 


## Technology 

- Angular 8.3.5
- Firebase Firestore + Authentication + Cloud Functions
- Dialogflow
- Ant Design System + Aegis Bootstrap 



## Project MVC Architecture 

The project structure involves 
- Pages > All the routes are provided in the following folder.
- - Dashboard > Contain all the dashboard based components. 
- - - Shared >  contains the common components. 
- - Auth > All authentication related modules.
- - Landing > Contains the public pages for the user access. 

- Services
- - Api service > All API calls / Firebase callbacks are defined in the following. 
- - Helper service > Contains all the helper function related to UI modal,etc. 

- Intefaces
- - user > User inteface containing all the properities of user. 




#### Command to create a dashboard page 


To generate components, Please use the following approach for generating lazy Loading module.
``` ng g m pages/dashboard/<page-name> -m pages/dashboard/dashboard.module --routing=true --flat=false --ro
ute=<page-name>
```

#### command to create authentication
ng g m pages/auth/forgot-password -m pages/auth/auth.module --routing=true --flat=false --route=forgot-password

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

You can reach us out at Angular Kingdom
