# GlOfflineTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.
 1. The task

The task before you is to code the **side menu** using:

-  Boostrap (3 or 4) framework markup
-  JS framework of your choice (preferably Angular or React)

Your goal is to end up with a working version of this menu - a primary navigation that reveals a side menu when the user clicks on the “hamburger” icon.

# 2. Other requirements:
- when the user clicks on top navbar link, menu has to be opened with particular item subitems visible (2nd level opened)
- when the user clicks on “close” icon or “hamburger” icon while side menu is opened, the side menu should be closed
- when the user clicks on another side menu item, than is opened, only last clicked item submenu should stay visible
- you don’t have to build back-end part, it’s enough to simulate backend service using any function returning enclosed json object with menu items (ex. in Angular you can use angular service returning hardcoded value)


## 3. Notes:
- Menu is generated from data as in *menu.json* file:
	- “main” property in *menu.json* contains an array of top *navbar* link items, those are IDs of sidebar menu items
 	- “menu” property in *menu.json* contains an array of sidebar menu items
	- property “sub” contains subitems of particular sidebar menu item

- The design is featured in the files located in "gl_task_idea" directory.

- All of the required imagery is located in the "gl_task_images" folder.

- Icons like “caret”, “close” or “hamburger” comes from Boostrap framework

-	Since you'll be working with a screenshots instead of Photoshop project files,
	pixel perfection (in regards to correct font sizes, colors, dimensions etc.) is not imperative,

-	The fonts being used belong to the Open Sans family and are freely available online.
	Choose any of the available embedding options and use this font family in the assessment.


### Additional points will be given:

-	if you enrich the menu with simple animation

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
