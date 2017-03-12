
      function initMap() {
        var twospirited = {lat: 43.6498401, lng: -79.3692382};
        var rhill = {lat: 43.8815363, lng: -79.4387149};
        var community = {lat: 43.6593425, lng: -79.36708};
        var aplus = {lat: 43.5375324, lng: -79.8745092};
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };



        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: twospirited, rhill, community, aplus
        });
        

        var marker = new google.maps.Marker({
          position: twospirited,
          map: map
        });
        var marker = new google.maps.Marker({
          position: rhill,
          map: map
        });
        var marker = new google.maps.Marker({
          position: community,
          map: map
        });
        var marker = new google.maps.Marker({
          position: aplus,
          map: map
        });
      }


    