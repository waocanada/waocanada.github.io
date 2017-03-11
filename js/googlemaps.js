
      function initMap() {
        var cntower = {lat: 43.642604, lng: -79.387117};
        var eaton = {lat: 43.653982, lng: -79.380319};


        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: cntower
        });
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: eaton
        });
        var marker = new google.maps.Marker({
          position: cntower,
          map: map
        });
        var marker = new google.maps.Marker({
          position: eaton,
          map: map
        });
      }
    