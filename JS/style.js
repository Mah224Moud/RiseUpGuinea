/***********************
 ***Formulaire*********/

function choixVille() {
    pays = document.getElementById('pays').value;
    switch (pays) {
        case 'votrepays':
            document.getElementById('ville').selectedIndex= 0;
            break;
        case 'france':
            document.getElementById('ville').selectedIndex = 1;
            break;
        case 'espagne':
            document.getElementById('ville').selectedIndex = 2;
            break;
        case 'royaume-uni':
            document.getElementById('ville').selectedIndex = 3;
            break;
        case 'allemagne':
            document.getElementById('ville').selectedIndex = 4;
            break;
        case 'portugal':
            document.getElementById('ville').selectedIndex = 5;
            break;
        case 'russie':
            document.getElementById('ville').selectedIndex = 6;
            break;
        case 'belgique':
            document.getElementById('ville').selectedIndex = 7;
            break;
        case 'suisse':
            document.getElementById('ville').selectedIndex = 8;
            break;
        case 'suede':
            document.getElementById('ville').selectedIndex = 9;
            break;
        case 'italie':
            document.getElementById('ville').selectedIndex = 10;
            break;
        default:
            break;
    }
}