var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function(){
    // 'Conroller as' syntax
    var guesswho = this;
    var people = [{name: 'Kris', github:'kdszafranski'}];
    guesswho.people = people;
    guesswho.nameIn = '';
    guesswho.gitIn = '';

    guesswho.add = function (){
        people.push({name: guesswho.nameIn, github: guesswho.gitIn})
        console.log(people);
    }

    guesswho.nameShow = function (person){
        guesswho.name = person.name;
        console.log(guesswho.name);
    }
});