(function() {
  'use strict';

  $('#files').on('change', function(event) {
    console.log(event.target);
    var file = event.target.files[0];
    console.log(file)

    var reader = new FileReader();

    reader.onload = (function(theFile) {
      return function(e) {
        console.log('this is the result of e:', e)
        JSON.parse(e.target.result);
      }
    })(file)
    reader.readAsText(file)
  });

  // function handleFileSelect(evt) {
  //   console.log('function firing')
  //   var files = evt.target.files[0]; // FileList object
  //   var reader = new FileReader();
  //   reader.onload = ((theFile) => {
  //     console.log(theFile);
  //   })
  //   reader.onload()
  // }


}());
