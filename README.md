# Angular
# What and Why?
* It is a framework tp built client side application.
* It is used for single page applications. 
* <b>Why? :-</b> 1) Modular Approach <br> 2) Re-Useable Code <br> 3) Development quicker and easier

# History
* 2010 -> Angular JS
* 2016 -> Angular version 2
* 2016 Dec -> Angular version 4
* 2017 Nov -> Angular version 5 <br>
<b>NOTE :-</b> Semantic Version -> Version 1.2.3 (1 is Major, 2 is Minor, 3 is Fix/Patch). Patch Number is increase anytime there is bug fix or some sort of patch, The minor number version increases when there are added features that don't break any functionality, The major number version changes when there is a break in any of the functionality. 

# Need 
* NodeJs, NPM, Angular CLI, Text Editor - VS Code
* <b>Angular CLI :- </b> It is command line interface for angular. It allows to generate building blocks of angular application by just typing out the commands. 
<img src="/Images/commands.png" width = "500px" height = "300px"> 
* Check the version of angular -> ng version
* After run this command, output should be
<img src="/Images/CLI.png" width = "500px" height = "300px"> 

# Create new Angular Project
* run command -> ng new ProjectName (suppose name is Hello-World)
* run command -> cd Hello-World
* run command -> ng serve to run application 
* Now go to google and write -> http://localhost:4200/

# Architecture
* Angular App - one or more module
* Module - One or more component and servies
* Components - HTML + CSS
* Services - Bussiness Logic
* Modules interacts and ultimately render the view in the browser.
<img src="/Images/modules.png" width = "500px" height = "300px"> 
<img src="/Images/comp.png" width = "500px" height = "300px"> 
<img src="/Images/comp2.png" width = "500px" height = "300px"> 
<img src="/Images/service.png" width = "500px" height = "300px"> 

# About some importat files 
* package.json file contains all the packages 
* main.ts file is entry point of angular project
* app.module.ts is root module of our application
* app.component.ts is root component of our application
* When we run ng serve command to start our application, the execution comes to main.ts file then goes in app.modules.ts, then app.components.ts

# Component 
* There are three components of angular- <br>
1) <b>Template -></b> It represents the view. This is created using HTML. <br>
2) <b>Class -></b> It is nothing but a code that supports the view. This is created using typescript. It contains Data & Methods. <br>
3) <b>Meta Data -></b> This is information that angular needs to decide if the particular class is angular component or just a regular class. This is defined using a decorator which is feature in typescript. Decorator defines tha information about the class which is attach to it. <br><br>

<b>Create a Component :- </b> Run the command `ng g c test` (comp name)

# Interpolation
* Interpolation is a technique that allows the user to bind a value to a UI element. Interpolation binds the data one-way. This means that when value of the field bound using interpolation changes, it is updated in the page as well. It cannot change the value of the field.
* There is limitation with interpolation. It works with string value.

# Attribute VS Property
* Atrribute ans Property are not same. Attribute- HTML, Property- DOM
* Attributes initialize DOM properties and they are done. Attribute value can't change once they are initialized.
* Property value however can change.

# Binding
Binding is the process which forms the connection between the application UI and the data which comes from the business logic. In Angular it can be called the automatic synchronization of the data and the view.
# Property Binding
Property binding in Angular helps you set values for properties of HTML elements or directives. Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.