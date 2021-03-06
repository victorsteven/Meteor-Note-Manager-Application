import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';

//Account config:
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
});

import './main.html';
import { Meteor } from 'meteor/meteor';

Template.body.helpers({

  // notes: [
  //   {text: 'My Note 1'},
  //   {text: 'My Note 2'},
  //   {text: 'My Note 3'}
  // ],

  notes(){
    return Notes.find({});
  }
});

Template.add.events({
  'submit .add-form': function(){
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    // console.log(text)
    //insert note:
    // Notes.insert({
    //   text,
    //   createdAt: new Date(),
    //   owner: Meteor.userId(),
    //   username: Meteor.user().username,
    // });

    Meteor.call('notes.insert', text);

    target.text.value = '';

    $('#addmodal').modal('close');
 
    return false;
  }
});

Template.note.events({
  'click .delete-note': function(){
    // Notes.remove(this._id);
    Meteor.call ('notes.remove', this);

    return false;
  }
})
