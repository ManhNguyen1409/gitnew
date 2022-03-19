let button =$('button')

button.on('click', function(){
    const username = $('#username').val()
    const password = $('#password').val()
    console.log(username,password);
    const newpass = $('#newpassword').val()
    const confirm = $('#confirm').val()
    if(newpass==confirm){
        $.ajax({
            url: `/doimk`,
            type : 'PUT',
            data :{
                username:username,
                password:password,
                newpass:newpass,
                confirm:password
            }
            
        }).then(function(data){
            console.log(data);
        }).catch(function(err){
            console.log(err);
        })
    }
  else{
      console.log('mk chua dung');
  }
})

