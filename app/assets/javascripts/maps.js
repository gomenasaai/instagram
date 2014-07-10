# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function(){
   var postId = $('#map').data('id');
 
   $.get('/posts/' + postId + '.json', function(post) {
     var map = new GMaps({
       div: '#map',
       lat: 0,
       lng: 0
     });
 
     GMaps.geocode({
       address: post.address,
       callback: function(results, status) {
         if (status == 'OK') {
           var latlng = results[0].geometry.location;
           map.setCenter(latlng.lat(), latlng.lng());
           map.addMarker({
             lat: latlng.lat(),
             lng: latlng.lng()
           });
         }
       }
     });
   })
 })