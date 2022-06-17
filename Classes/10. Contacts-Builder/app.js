class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(val) {
        let allDivs = Array.from(document.querySelectorAll('div .title'));

        if(val){
            this._online = true;
        } else {
            this._online = false;
        }
        
        for (const person of allDivs) {
            if(person.textContent.includes(`${this.firstName} ${this.lastName}`)){
                if(val) {
                    person.classList.add('online');
                    this._online = true;
                }
                 else {
                    this._online = false;
                    person.classList.remove('online');
                }
            }
        }
    }
    render(id) {
        //create DOM element with contact info and append it
        let article = this.createEl('article');
        article.innerHTML = `    <div class="title">${this.firstName} ${this.lastName}<button>&#8505;</button></div>
        <div class="info">
            <span>&phone; ${this.phone}</span>
            <span>&#9993; ${this.email}</span>
        </div>`;

        //if this._online is true initially, titleDiv must be set with class
        if(this._online == true){
            article.querySelector('.title').classList.add('online');
        } 

        //infoDiv must be hidden initially
        let infoDiv = article.querySelector('.info');
        infoDiv.style.display = 'none';
        document.getElementById(id).appendChild(article);

        //infoBtn reference
        let infoBtn = article.querySelector('button');
        infoBtn.addEventListener('click', onClick);

        function onClick() {
            if(infoDiv.style.display == 'none'){
                infoDiv.style.display = 'block';
            } else {
               infoDiv.style.display = 'none';
            }
        }
    }

    createEl(type, content, className) {
        let result = document.createElement(type);
        if (content) {
            result.textContent = content;
        }
        if (className) {
            result.className = className;
        }
        return result;
    }
}

    //input
    let data = {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        phone: '0888 123 456',
        email: 'i.ivanov@gmail.com'
    };
    let contact = new Contact(data.firstName, data.lastName, data.phone, data.email);
    contact.online = true;
    contact.render('main');

    // //After 1 second, change the online status to true
    // setTimeout(() => contacts[1].online = true, 2000);
    // setTimeout(() => contacts[1].online = false, 4000);