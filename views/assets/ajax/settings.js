window.onload = function() {
  $('#update-button').click(function(event){
    event.preventDefault();
    console.log("" + <%= user%>  + "")
    $.ajax({
      url: '/users/' + <%= user._id %>,

    });

  })

  $('#delete-button').click(function(event){
    event.preventDefault();
    console.log('UPDATE')
  })

  var TEST = "TEST";

}
