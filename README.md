Instructions:

create the workspace:
(multiple applications in a single workspace, abstraction layer - libs, apps should be very thin)
npx create-nx-workspace myworkspace

update nx.json: the npmScope allows us to @workshop/material for example keeping our dependencies nice and clean
{
"npmScope": "workshop",
"implicitDependencies": {
"angular.json": "_",
"package.json": "_",
"tsconfig.json": "_",
"tslint.json": "_",
"nx.json": "\*"
},
"projects": {
}
}

set default scss
ng config schematics.@nrwl/schematics:component.styleext scss

create the dashboard app
ng g app dashboard --routing -p=app --style=scss

add angular material
ng add @angular/material

create one material module for the material components
ng g lib material

import into material module
import {
MatButtonModule,
MatCardModule,
MatCheckboxModule,
MatFormFieldModule,
MatGridListModule,
MatIconModule,
MatInputModule,
MatListModule,
MatMenuModule,
MatSelectModule,
MatSidenavModule,
MatSliderModule,
MatSnackBarModule,
MatTableModule,
MatToolbarModule,
MatButtonToggleModule
} from '@angular/material';
import and export them

make it available to application src>app>app module

generate a core data library:
ng g lib core-data -d

create shared components libs:
ng g lib ui-login -p=ui
ng g lib ui-toolbar -p=ui

generate some components
--project=dashboard

if this is a feature (are you going to route to this component) generate a module first then put in the component
ng g m home --routing
ng g c home
ng g m projects --routing
ng g c projects
import the modules into app module

add app-home to customers component
export homecomponent from home module

create a routing module

create login component in ui login lib
ng g c login --project=ui-login
export from ui login module
export login component from index.ts
import into app module

# Angular Core Workshop

We are going to use the Angular CLI and NRWL Extensions extensively in the workshop to streamline development and free us up to focus on core concepts.

Follow the steps below to get started!

## The Stack

### NRWL Workspace

A NRWL workspace contains one or all of you Angular projects and libraries. It creates a monorepo for your applications domains. Nx helps add extra layer of tooling that can help manage your enterprise applications.

### Angular Material

Angular Material is a UI library for Angular that gives you access to a modern material UI that works across web, mobile, and desktop applications with minimal custom CSS and setup.

### JSON Server

Creates a quick and simple way to mock out a backend REST service. We can then deliver some mocked out data in JSON format to make sure everything is working as expected once our real backend is connected.

## Getting Started

An Nx workspace is an Angular CLI project that has been enhanced to be enterprise ready. Being an Angular CLI project means it will be handy to have the Angular CLI installed globally, which can be done via npm or yarn as well.

```
npm install -g @angular/cli
```

> Note: If you do not have the Angular CLI installed globally you may not be able to use ng from the terminal to run CLI commands within the project. But the package.json file comes with npm scripts to run ng commands, so you can run npm start to ng serve and you can run npm run ng <command> to run any of the ng commands.

After you have installed the Angular CLI, install `@nrwl/schematics`.

```
npm install -g @nrwl/schematics
```

After installing it you can create a new Nx workspace by running:

```
create-nx-workspace angular-core-workshop
```

You are good to go!
