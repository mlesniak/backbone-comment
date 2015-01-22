// Application.js

$(function() {
    var CommandModel = Backbone.Model.extend({
        defaults: function() {
            return {
                text: "",
                date: new Date()
            }
        }
    });
    command = new CommandModel


    // Views.
    // We can attach all kinds of events to models (and collections, views, ...).
    var AppView = Backbone.View.extend({
        el: $("#commandPanel"),        
        command: $("#command"),

        // Rendering.
        render: function() {
            // Render a panel inside this view.
            return this;
        },

        // Event handling.
        events: {
            "click #button": "executeCommand",
            "keypress #command": "executeCommandOnEnter"

        },

        executeCommand: function(e) {
            console.log("Command on Button:", this.command.val())
            this.command.val('')
            this.render()
        },

        executeCommandOnEnter: function(e) {
            if (e.keyCode != 13) {
                return;
            }
            console.log("Command on Enter:", this.command.val())
            this.command.val('')
            this.render()
        }

    });
    var App = new AppView
});
