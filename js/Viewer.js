let form = document.getElementById('actions');
form.onsubmit = onsubmitHandler;

function onsubmitHandler ()
{
    let submitValue = this.destinationInput;
    mapDirection(submitValue);
}
