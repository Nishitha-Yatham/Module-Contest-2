
const create = document.getElementById("Cr-btn");
const area = document.getElementById("text-container");
const closeBtn = document.getElementById('cl-btn');
const cancelBtn = document.getElementById('c-btn');
const saveBtn = document.getElementById('p-btn');
const titleInput = document.getElementById('heading');
const descriptionInput = document.getElementById('content');
const blogPostsContainer = document.getElementById('blog-posts');

let blogPosts=[];

//By clicking Create New Post//
create.addEventListener("click",showModal)
function showModal() {
    area.style.display = 'block';
  }

//Closing
closeBtn.addEventListener('click', closeModal)
function closeModal() {
    area.style.display = 'none';
  }

  //Canceling Post
  cancelBtn.addEventListener('click', closeModal);
  function closeModal() {
    area.style.display = 'none';
  }

  // Saving Post
  saveBtn.addEventListener('click', saveBlogPost);
  function saveBlogPost(event) {
    event.preventDefault();
    const title = titleInput.value;
    const description = descriptionInput.value;
    if (title.trim() === '' || description.trim() === '') {
      alert('All feilds are required');
      return;
    }
  const dateTime = new Date();
  const blogPost = { title, description, dateTime };
  blogPosts.push(blogPost);
  displayBlogPosts();
  closeModal();
  clearForm();
}
function clearForm() {
    titleInput.value = '';
    descriptionInput.value = '';
  }

// Display Posts

function displayBlogPosts() {
    blogPostsContainer.innerHTML = '';
    blogPosts.forEach((blogPost, index) => {
      const blogPostElement = document.createElement('div');
      blogPostElement.classList.add('blog-post');
      const titleElement = document.createElement('h3');
      titleElement.textContent = blogPost.title;
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = blogPost.description;
      const dateTimeElement = document.createElement('p');
      const dateTimeString = blogPost.dateTime.toLocaleString();
      dateTimeElement.textContent = `Posted on ${dateTimeString}`;
      dateTimeElement.classList.add('dateTime');
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.dataset.index = index;
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.dataset.index = index;
      blogPostElement.appendChild(titleElement);
      blogPostElement.appendChild(descriptionElement);
      blogPostElement.appendChild(editBtn);
      blogPostElement.appendChild(deleteBtn);
      blogPostElement.appendChild(dateTimeElement);
      blogPostsContainer.appendChild(blogPostElement);
    });
  }

  // Delete blog post 
blogPostsContainer.addEventListener('click', deleteBlogPost);
function deleteBlogPost(event) {
    if (event.target.tagName.toLowerCase() === 'button' && event.target.textContent === 'Delete') {
      const index = event.target.dataset.index;
      blogPosts.splice(index, 1);
      displayBlogPosts();
    }
  }

  // Edit blog post
   blogPostsContainer.addEventListener('click', editBlogPost);
   function editBlogPost(event) {
    if (event.target.tagName.toLowerCase() === 'button' && event.target.textContent === 'Edit') {
      const index = event.target.dataset.index;
      const blogPost = blogPosts[index];
      titleInput.value = blogPost.title;
      descriptionInput.value = blogPost.description;
      blogPosts.splice(index, 1);
      displayBlogPosts();
      showModal();
    }

  
  
}


  