# NgUtils

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

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


## TODO
## LazyLoad
PreloadingStrategy

## Store
npm i -S @ngrx/store
npm i -S @ngrx/store-devtools
npm i -S @ngrx/entity
Reducers specify how the application's state changes in response to actions sent to the store.
Remember that actions only describe what happened, but don't describe how the application's state changes.



# Forms 

`<p *ngIf="form.controls.name.invalid">{{ nameInvalid }}</p>`
`<p *ngIf="form.get('name').invalid>{{ nameInvalid }}</p>`
là on voit pas la difference entre passer par le controle ou le form.get, mais avec nested forms on pourra pas y accéder, le get nous permet de récup des controls nested
par exemple `form.get('adress.town')`

