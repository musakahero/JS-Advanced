window.addEventListener("load", solve);

function solve() {
  //selectors
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  }

  const lists = {
    review: document.getElementById('review-list'),
    published: document.getElementById('published-list')
  }
  let publishBtn = document.getElementById('publish-btn').addEventListener('click', onPublish);
  let clearBtn = document.getElementById('clear-btn').addEventListener('click', onClear);



  function onPublish(ev) {
    ev.preventDefault();

    //read input fields
    const title = input.title.value;
    const category = input.category.value;
    const content = input.content.value;

    //validate input
    if(title == '' || category == '' || content == ''){
      return;
    }

    //create list item 
    const li = document.createElement('li');
    li.className = 'rpost';
    li.innerHTML = `<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`;

    //*add functionality to buttons
    const editBtn = li.querySelector('.edit');
    const approveBtn = li.querySelector('.approve');
    editBtn.addEventListener('click', onEdit);
    approveBtn.addEventListener('click', onApprove);

    //append to first list
    lists.review.appendChild(li);

    //clear input fields
     input.title.value = '';
     input.category.value = '';
     input.content.value =  '';

     function onEdit() {
       //populate input fields with values
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;
      //remove list item from list 
      li.remove();
    }

    function onApprove(){
      //move list item from first list to second list
      lists.published.appendChild(li);
      //remove action buttons
      editBtn.remove();
      approveBtn.remove();
    }
  }

  function onClear(){ 
    //set second list HTML to empty string
    lists.published.innerHTML = '';
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

