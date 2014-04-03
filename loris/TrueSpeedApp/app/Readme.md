# README

The files from Sencha are not included here.

If you have a different existing project, you can copy the files from .sencha and from touch directories here.

Something like (replacing {AnotherApp} with the path of a different Sencha Touch app:

    sudo cp -Rv {AnotherApp}/.sencha .
    sudo cp -Rv {AnotherApp}/touch .

The webserver must be the owner of the directory, or at least have the right permissions.

On Debian/Ubuntu,

    sudo chown -R www-data .

should be enough.

Please notify me if this document must be corrected.


## ./touch

This folder contains the sencha touch code (not here)

## ./build

This folder contains the built project (not here)

## ./controller

This folder contains the controllers

## ./model

This folder contains the models

## ./view

This folder contains the views

## ./store

This folder contains the stores

## ./form

This folder contains the forms

