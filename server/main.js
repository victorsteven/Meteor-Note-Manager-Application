import { Meteor } from 'meteor/meteor';

export const Notes = new Mongo.Collection('notes');


Meteor.startup(() => {
  // code to run on server at startup
});

