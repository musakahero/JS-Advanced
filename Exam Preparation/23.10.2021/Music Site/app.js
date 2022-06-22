window.addEventListener('load', solve);

function solve() {
    const inputs = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }
    const sections = {
        allHits: document.querySelector('#all-hits .all-hits-container'),
        savedHits: document.querySelector('#saved-hits .saved-container'),
        totalLikes: document.querySelector('.likes p')
    }

    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', onAdd);
    let totalLikes = 0;

    function onAdd(ev) {
        ev.preventDefault();

        //keep values
        const genre = inputs.genre.value;
        const name = inputs.name.value;
        const author = inputs.author.value;
        const date = inputs.date.value;
        //validate
        if (genre == '' || name == '' || author == '' || date == '') {
            return;
        }

        let div = document.createElement('div');
        div.className = "hits-info";
        div.innerHTML = `<img src="./static/img/img.png">
            <h2>Genre: ${genre}</h2>
            <h2>Name: ${name}</h2>
            <h2>Author: ${author}</h2>
            <h3>Date: ${date}</h3>
            <button class="save-btn">Save song</button><button class="like-btn">Like song</button><button class="delete-btn">Delete</button>`;
        sections.allHits.appendChild(div);

        clearInput();
        let likeBtn = div.querySelector('.like-btn');
        let saveBtn = div.querySelector('.save-btn');
        let deleteBtn = div.querySelector('.delete-btn');
        likeBtn.addEventListener('click', onLike);
        saveBtn.addEventListener('click', onSave);
        deleteBtn.addEventListener('click', onDelete);

        function onLike(){
            totalLikes++;
            sections.totalLikes.textContent = `Total Likes: ${totalLikes}`;
            likeBtn.disabled = true;

        }
        function onSave(){
            sections.savedHits.appendChild(div);
            likeBtn.remove();
            saveBtn.remove();
        }
        function onDelete(){
            div.remove();
        }

    }

    function clearInput() {
        inputs.genre.value = '';
        inputs.name.value = '';
        inputs.author.value = '';
        inputs.date.value = '';
    }

}