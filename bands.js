
$(function() {



    $.ajax({
        type: 'GET',
        dataType: 'xml',
        url: 'data/data.xml',
        timeout: 2000,
        beforeSend: function() {
            console.log('loading data');
        },
        complete: function() {
            console.log('complete');
        },
        success: function(data) {
            console.log('success');
            //console.log(data);
            var theRoot = $(data).find('bands');
            // console.log(theRoot);

            var arrGifts = $(theRoot).find('bands');
            // console.log(arrGifts);

         $('#section-loader').append('<div class="gallery">');

         var $gallery = $('.gallery');
            arrGifts.each(function() {
                var picture = $(this).find('picture').text();
                var category = $(this).find('name').text();
                var contributor = $(this).find('description').text();

                $('#viewBands').click(function() {
                    var strOutput = '<div class="card"><figure>';
                    strOutput += '<img src="' + picture + '" alt="">';
                    strOutput += '<li><span class="band-name">Category: </span>' + category + '</li>';
                    strOutput += '<li><span class="band-description">Description: </span>' + description + '</li>';
                    strOutput += '</ul></figure>';
                    strOutput += '</li> </div>';
                    $gallery.append(strOutput);
                });

            });

        },
        error: function() {
            console.log('error');
        }
    });

});



function bandsRequest() {
  var bands = new XMLHttpRequest(); //Create Request Object

  bands.onload = function() { //when ready state changes
    if(bands.status === 200) { //check server
      responseObject = JSON.parse(bands.responseText);

      var newContent = '';
      for (var i = 0; i <responseObject.bands.length; i++) { //loop through gifts
        newContent += '<div class="gifts">';
      }

    document.getElementById('content').innerHTML = newContent;

    }
  };

  bands.open('GET', 'data/data.xml', true); //prepare request
  bands.send(null); //send request
}
