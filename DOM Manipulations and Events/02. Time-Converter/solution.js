function attachEventsListeners() {
    document.querySelector('main').addEventListener('click', onClick);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function onClick(ev) {
        if (ev.target.id.includes('Btn')) {
            //console.log('clicked');


            if (ev.target.id.includes('days')) {
                days = Number(document.getElementById('days').value);
                hours = days * 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (ev.target.id.includes('hours')) {
                hours = Number(document.getElementById('hours').value);
                days = hours / 24;
                minutes = hours * 60;
                seconds = minutes * 60;
            } else if (ev.target.id.includes('minutes')) {
                minutes = Number(document.getElementById('minutes').value);
                hours = minutes / 60;
                days = hours / 24;
                seconds = minutes * 60;
            } else if (ev.target.id.includes('seconds')) {
                seconds = Number(document.getElementById('seconds').value);
                minutes = seconds / 60;
                hours = minutes / 60;
                days = hours / 24;
            }

        }

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
}