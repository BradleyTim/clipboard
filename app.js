const copyText = document.querySelector('#copyItem');
const showText = document.querySelector('#alertCopy');

function copyToClipboard() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    showText.textContent = 'Text copied';
    showText.style.display = 'block';
    setTimeout(() => {
        showText.textContent = '';
        showText.style.display = 'none';
    }, 1000);
}
