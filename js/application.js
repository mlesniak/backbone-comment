// Application.js

$(function() {
    // Views.
    var AppView = Backbone.View.extend({
        el: $("#application"),
        dateTemplate: _.template($("#template").html()),

        // Rendering.
        render: function() {
            $("#templatePanel").html(this.dateTemplate({
                date: new Date()
            }));
            return this;
        },

        // Event handling.
        events: {
            "click #button": "buttonClicked"
        },

        buttonClicked: function(e) {
            this.render()
        }
    });
    var App = new AppView
});
