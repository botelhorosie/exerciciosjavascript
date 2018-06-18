function checkLogin(){
    login = $("#login").val();
    $.ajax({
        processData: 'application/x-www-form-urlencoded',
        type: 'post',
        data: {'type':'login', 'value' : login},
        dataType: 'html',
        url: 'classes/checkLoginAndEmail.class.php',
        success: function (retorno){
            if(retorno == 'true'){return false; } else {return true;}
        },
        error: function(erro){
            alert(erro);
        }
    });
}