$("#login").on("click", function (){
  const username = $("#username").val();
  const password = $("#password").val();
  $.ajax({
    type: "POST",
    url: "/index/login",
    data: {
      username: username,
      password: password,
    },
  })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
  
});
