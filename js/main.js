 const showMenu = (headerToggle, navbarId) => {
     const toggleBtn = document.getElementById(headerToggle),
         nav = document.getElementById(navbarId)

     if (headerToggle && navbarId) {
         toggleBtn.addEventListener('click', () => {
             nav.classList.toggle('show-menu')
             toggleBtn.classList.toggle('fa-times')
         })
     }
 }
 showMenu('header-toggle', 'navbar')

 const linkcolor = document.querySelectorAll('.nav_link');

 function colorLink() {
     linkcolor.forEach(l => l.classList.remove('active'))
     this.classList.add('active')
 }
 linkcolor.forEach(l => l.addEventListener('click', colorLink))


 const searchInput = document.getElementById('searchInput');
 const searchIcon = document.getElementById('searchIcon');

 searchInput.addEventListener('keydown', (event) => {
     if (event.key === 'Enter') {
         searchYouTube();
     }
 });

 searchIcon.addEventListener('click', searchYouTube);

 function searchYouTube() {
     const searchQuery = searchInput.value;
     const youtubeUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

     // You can either open a new tab or replace the current tab:
     // Open in new tab:
     window.open(youtubeUrl, '_blank');

     // Replace current tab:
     // window.location.href = youtubeUrl;
 }