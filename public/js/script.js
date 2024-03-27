console.log('Hello, world')

function changeBackgroundColor() {
    document.body.style.backgroundColor = 'blue';
}

window.addEventListener('pageshow', function(event) {
    var historyTraversal = event.persisted || (typeof window.performance != 'undefined' && window.performance.navigation.type === 2);
    if (historyTraversal) {
        // Reload the page
        window.location.reload();
    }
});