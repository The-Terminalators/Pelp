window.onload = function() {

  var user_id = $('#ID').html().toString()
  var user_name = $('#NAME').html().toString()
  var user_email = $('#EMAIL').html().toString()
  //var user_obj = $('#USER').html().toString()

  console.log("ID IS: ", user_id)
  console.log("NAME IS: ", user_name)
  console.log("ID IS: ", user_email)
  //console.log("USER: ", user_obj)


  $('#update-button').click(function(event){
    event.preventDefault();
    var input_name =  $('#name').val().toString();
    var input_email = $('#email').val().toString();
    var input_password = $('#password').val().toString();

    if (input_name == ''){
      input_name = user_name;
    }
    if (input_email == ''){
      input_email = user_email;
    }
    if (input_password == ''){
      input_password = null
    }

    $.ajax({
      url: '/users/' + user_id,
      method: 'PATCH',
      dataType: 'json',
      data: {
        name: input_name,
        email: input_email,
        password: input_password
      },
      success: function(data, textStatus, jqXHR){
        console.log(data)
        redirect('/profile')
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(errorThrown)
      }
    })


  })

  $('#delete-button').click(function(event){
    event.preventDefault();

  })
}
