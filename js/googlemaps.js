
      function initMap() {
        var twospirited = {lat: 43.6498401, lng: -79.3692382};
        var rhill = {lat: 43.8815363, lng: -79.4387149};
        var community = {lat: 43.6593425, lng: -79.36708};
        var aplus = {lat: 43.5375324, lng: -79.8745092};
        var access = {lat: 43.6714965, lng: -79.4933432};
        var acton = {lat: 43.6331924, lng: -80.0350459};
        var adam = {lat: 43.6577554, lng: -79.4330363};
        var blake  = {lat: 43.6730145, lng: -79.338275};
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };
        // var  = {lat: , lng: };



        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: twospirited, rhill, community, aplus, access, acton, adam, blake
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
        var marker = new google.maps.Marker({
          position: access,
          map: map
        });
        var marker = new google.maps.Marker({
          position: acton,
          map: map
        });
        var marker = new google.maps.Marker({
          position: adam,
          map: map
        });
        var marker = new google.maps.Marker({
          position: blake,
          map: map
        });
      }


    