import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');

// Meteor.methods({
//   'notes.insert'(text) {
//    check(text, String);

//    //check if user is logged in
//    if(!Meteor.userId()){
//     throw new Meteor.Error('not-authorized');
//    }

//    Notes.insert({
//     text,
//     createdAt: new Date(),
//     owner: Meteor.userId(),
//     username: Meteor.user().username,
//   });
//   },

//   'notes.remove'(note){
//    check(note._id, String);

//    Notes.remove(note._id);
//   }
// })