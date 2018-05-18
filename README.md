# AngularWidgets

Please run `npm install` for install dependencies

Run `ng serve -o` for a dev server 

If you want generate a production app run `ng build --prod`

## Aditional dependencies 

Mediaqueries mixins

`breakpoint-sass`

Statistics Charts

`ng2-charts`


# Brief

## Base 

This application was developed in AngularJS CLI because I have good knowledge in this javascript framework.

## Widgets

In the widgets develop, was generated 4 components with it corresponding html template, ts file, and sass stylesheet. 

## Building templates

For each component was builded a basic html template following the design guide in the photoshop file.

## Styling

All styles was made in SASS format for later be preprocessed in the CLI rendering, each component has SASS file with the corresponding widget style. In the styling process for desktop and mobiles devices I used “breakpoint-sass” as a dependency for use media queries mixins, setting by default the mobile first styles. 

## Info Feeding 

For language options and Info feeding I made two JSON files for inject in each widget it respective data gotten in an http request used in the main component and using a service method.

## Graphics

I used “ng2-charts” angular plugin for draw the donut statistic in the data transfer widget, feeding this plugin with the corresponding  json data service.

## My Election

I chose this four widgets over the others because it has sufficient information for make it more dynamic and graphically it's more complete.
