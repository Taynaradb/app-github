function perfil(){

    $.ajax({
        type: 'GET',
        url: `https://api.github.com/users/gutoffline`,
        success: (function(user){
            let avatar = user.avatar_url;
            let login = user.login;
            let blog = user.blog;
            let twitter = user.twitter_username;
            let git = user.url;
           console.log( login );

           $('#userpic').attr({src: avatar, alt: login });
           $('#user').text(login);
           $('#twitter').attr('href',twitter);
        })
    })
};

//document.querySelector('#pesquisar');
window.addEventListener('load',function(){
    perfil();
});

/*
login
avatar_url
bio
blog
twitter_username
url
*/
