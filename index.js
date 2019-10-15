function addingEventListener() {
    // First define the variable as the input element,
    const input = document.getElementById('input');
    // Add an event listener of 'click' to the input element,
    input.addEventListener('click', function (event) {
        // When clicked alert 'I was clicked'.
        alert('I was clicked!');
    });
}
