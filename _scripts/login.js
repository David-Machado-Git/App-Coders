
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// CARREGAMENTO SITE PRELOADER ! - ABAIXO -
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX




$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
})

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// CARREGAMENTO SITE PRELOADER ! - ACIMA -
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// VALIDAÇÃO CAMPOS ! - ABAIXO -
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



function validaLogin() {

    var user = document.querySelector('#user').value;
    // var memoriaUm = String('admin');
    var senha = document.querySelector('#senha').value;
    // window.alert(`${user} ` + ` ${senha}`);
    console.log(`${user} ` + ` ${senha}`);

    if (user=='admin' & senha=='admin') {
        // window.confirm('Seja bem vindo usuário ' + ' Admin');
        window.location.href = '../dashboard.html'

    }else {
        window.confirm('Usuário ou senha incorreto.  Digite Novamente!');
    }
    

}