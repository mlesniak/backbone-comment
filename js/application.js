// Application.js

$(function() {

    // Defines the model for a single comment.
    var Comment = Backbone.Model.extend({
        defaults: function() {
            // Returns a map with fields.
            return {
                // No comment and author by default.
                text: "",
                author: ""
            };
        }
    });

    
    // List of comments for an entry.
    var CommentList = Backbone.Collection.extend({
        model: Comment
    });  
    var Comments = new CommentList;

    
    // Views
    var AppView = Backbone.View.extend({
        el: $("#application"),

        events: {
            "click #button": "buttonClicked"
        },

        buttonClicked: function(e) {
            alert('Clicked')
        }
    });
    var App = new AppView
});
