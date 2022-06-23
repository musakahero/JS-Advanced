function solve() {

   let inputs = {
      author: document.getElementById('creator'),
      title: document.getElementById('title'),
      category: document.getElementById('category'),
      content: document.getElementById('content'),
   }
   let postsSection = document.querySelector('div.site-content section');
   let archiveSection = document.querySelector('.archive-section ol');
   let createBtn = document.querySelector('.btn.create');
   createBtn.addEventListener('click', onCreate);

   function onCreate(ev) {
      ev.preventDefault();

      //keep values
      let author = inputs.author.value;
      let title = inputs.title.value;
      let category = inputs.category.value;
      let content = inputs.content.value;

      let article = createEl('article', '', postsSection);
      createEl('h1', `${title}`, article);
      let catP = createEl('p', 'Category: ', article);
      createEl('strong', `${category}`, catP);
      let creatorP = createEl('p', 'Creator: ', article);
      createEl('strong', `${author}`, creatorP);
      createEl('p', `${content}`, article);
      let div = createEl('div', '', article, 'buttons');
      let deleteBtn = createEl('button', 'Delete', div, 'btn delete');
      let archiveBtn = createEl('button', 'Archive', div, 'btn archive');

      //archive btn
      archiveBtn.addEventListener('click', onArchive);
      function onArchive() {
         createEl('li', `${title}`, archiveSection);
         let sortedList = Array.from(archiveSection.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
         archiveSection.innerHTML = '';
         sortedList.forEach(e => archiveSection.appendChild(e));
         article.remove();
      }

      //delete btn
      deleteBtn.addEventListener('click', onDelete);
      function onDelete(){
         article.remove();
      }
   }

   function createEl(type, content, parentEl, className) {
      const element = document.createElement(type);
      element.textContent = content;

      if (className) {
         element.className = className;
      }

      parentEl.appendChild(element);
      return element;
   }
}
