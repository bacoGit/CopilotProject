function linkClicked(text) {
    switch (text) {
        case 'home':
            document.getElementById('home').style.display = 'block';
            document.getElementById('about').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            break;
        case 'about':
            document.getElementById('home').style.display = 'none';
            document.getElementById('about').style.display = 'block';
            document.getElementById('contact').style.display = 'none';
            break;
        case 'contact':
            document.getElementById('home').style.display = 'none';
            document.getElementById('about').style.display = 'none';
            document.getElementById('contact').style.display = 'block'; 
            break;
    }
}