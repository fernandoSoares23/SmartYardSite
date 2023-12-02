let navigation = document.querySelector('.navigation');
let insta = document.getElementById('instagramID');
let twi = document.getElementById('twitterID');
let git = document.getElementById('githubID');

insta.onclick = (function() {
    window.open(
        'https://www.instagram.com/smartyard_ltda/',
        '_blank'
    );
});

twi.onclick = (function() {
    window.open(
        'https://twitter.com/EtecYard',
        '_blank'
    );
});

git.onclick = (function() {
    window.open(
        'https://github.com/C4ptainJohn24/SmartYard/',
        '_blank'
    );
});