
      $(document).ready(function() {

        var successCallback = function( data, textStatus, jqXHR ) {
          alert( JSON.stringify( data ) );
          alert( "First person Age : " + data.people[0].age );
          console.log(data);
        };
        
        var failCallback = function( jqXHR, textStatus, errorThrown ) {
          alert( "There has been an error!" );
        };

        $( "#myform" ).submit(
          function(e) {
            e.preventDefault();
            var formdata = new FormData( document.getElementById( "myform" ) );
            $.ajax( { url         :  $( this ).attr( 'action' ),
                      type        : "POST",
                      data        : formdata,
                      success     : successCallback,
                      error       : failCallback,
                      processData : false,
                      contentType : false } );
          });

      });
