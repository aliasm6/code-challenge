(function() {
  'use strict';
  $('#files').on('change', (event) => {
    $('#rendered').empty();
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = ((theFile) => {
      return function(e) {
        let arrayJSON = JSON.parse(e.target.result);
        let renderedHTML = findTheEnd(arrayJSON);
        $('#rendered').append(renderedHTML);
      }
    })(file)
    function findTheEnd(contentArray) {
      while (Array.isArray(contentArray)) {
        return contentArray.map(findTheEnd).join('');
      }
      let tag = contentArray.tag;
      let content = contentArray.content;
      if(typeof content === "string") {
        return `<${tag}>${content}</${tag}>`;
      }
      else {
        return `<${tag}>` + findTheEnd(content) + `</${tag}>`;
      }
    }
    reader.readAsText(file);
  });

}());
