fetch('header.html')
  .then(response => response.text())
  .then(data => {
    const headerDiv = document.getElementById('header');
    if (headerDiv) headerDiv.innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки шапки:', error));

fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    const footerDiv = document.getElementById('footer');
    if (footerDiv) footerDiv.innerHTML = data;
  })
  .catch(error => console.error('Ошибка загрузки подвала:', error));

const postsContainer = document.getElementById('posts-container');
if (postsContainer) {
  fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
      let html = '<ul class="post-list">';
      posts.forEach(post => {
        html += 
          <li>
            <a href="${post.url}">${post.title}</a>
            <span class="post-date">(${post.date})</span>
          </li>
        ;
      });
      html += '</ul>';
      postsContainer.innerHTML = html;
    })
    .catch(error => console.error('Ошибка загрузки списка постов:', error));
}
