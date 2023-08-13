console.log('Не лізь сюда!')

const websiteURL = 'https://mega.nz/file/QqMzEbZT#bFAZy94YZ0BwpN_wqPT7Xp2C6Rc3y1QbscyvUPgYFnM';

function openDwWeb() {
  window.open(websiteURL, '_blank');
}

const openButton = document.getElementById('openButton');
openButton.addEventListener('click', openWebsite);