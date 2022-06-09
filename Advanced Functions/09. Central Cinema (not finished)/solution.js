function solve() {
    //log the movie
    let onScreenBtn = document.querySelector('button');
    onScreenBtn.addEventListener('click', onScreen);
    //onScreenBtn.addEventListener('click', onScreen);
    let moviesSection = document.getElementById('movies');
    let archiveSection = document.getElementById('archive');

    let movieName = document.querySelector('#container input').value;
    let hall = document.querySelector('#container input:nth-of-type(2)').value;
    let ticketPrice = Number(document.querySelector('#container input:nth-of-type(3)').value);

    function onScreen(e) {
        //cancel auto-refresh
        allBtns = Array.from(document.querySelectorAll('button'));
        allBtns.forEach(btn => btn.type = 'button');
        
        if (movieName.length > 0
            && hall.length > 0
            && isNaN(ticketPrice) == false) {
            
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.textContent = movieName;
            li.appendChild(span);
            let outerStrong = document.createElement('strong');
            outerStrong.textContent = `Hall: ${hall}`;
            li.appendChild(outerStrong);

            let innerStrong = document.createElement('strong');
            innerStrong.textContent = ticketPrice.toFixed(2);
            let input = document.createElement('input');
            input.placeholder = 'Tickets Sold';
            let archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';

            let div = document.createElement('div');
            div.appendChild(innerStrong);
            div.appendChild(input);
            div.appendChild(archiveBtn);
            li.appendChild(div);

            moviesSection.querySelector('ul').appendChild(li);

            //clear the inputs
            document.querySelector('#container input').value = '';
            document.querySelector('#container input:nth-of-type(2)').value = '';
            document.querySelector('#container input:nth-of-type(3)').value = '';
            
        }

    }

    document.querySelector('#movies ul').addEventListener('click', onArchive);

    function onArchive(ev) {
        if (ev.target.tagName == 'BUTTON') {
            //ev.preventDefault();
            let amountOfTickets = Number(ev.target.parentElement.querySelector('input').value);

            if (isNaN(amountOfTickets) == false) {
                let li = document.createElement('li');

                let span = document.createElement('span');
                span.textContent = movieName;
                li.appendChild(span);

                let strong = document.createElement('strong');
                strong.textContent = `Total amount: ${(amountOfTickets * ticketPrice).toFixed(2)}`;
                li.appendChild(strong);

                let deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';

                li.appendChild(deleteBtn);

                archiveSection.querySelector('ul').appendChild(li);
            }
        }
    }

    let clearBtn = document.querySelector('#archive button');
    clearBtn.addEventListener('click', onClear);

    function onClear(ev) {
        
        allArchivedEls = Array.from(document.querySelectorAll('#archive ul li'));
        allArchivedEls.forEach(e => e.remove());
    }

}