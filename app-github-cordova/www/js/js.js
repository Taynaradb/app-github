function perfil(){

    $.ajax({
        type: 'GET',
        url: `https://api.github.com/users/gutoffline`,
        success: (function(user){
            console.log(user)
            let avatar = user.avatar_url;
            let login = user.login;
            let blog = user.blog;
            let twitter = user.twitter_username;
            let git = user.url;
            let company = user.company;
           console.log( login );

           $('#userpic').attr({src: avatar, alt: login });
           $('#user').text(login);
           $('#company').text(company);
           $('#twitter').attr('href','https://twitter.com/'+twitter);
           $('#git').attr('href', git);
           $('#blog').attr('href', blog);
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
