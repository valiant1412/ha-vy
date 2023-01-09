//scroll-down the category
const dropdown = document.querySelector('.category');
 const category = document.querySelector('#category');
 const search_button = document.querySelector('.search-button');
 const search = document.querySelector('#search');
dropdown.addEventListener('mouseover',function(){
    category.classList.remove('hidden');
});
category.addEventListener('mouseover',function(){
    category.classList.remove('hidden')
})
function remove_menubar(){
category.classList.add('hidden')
}
category.addEventListener('mouseout',remove_menubar
)

dropdown.addEventListener('mouseout',function(){
    category.classList.add('hidden');
})
//scroll down the search-box
search_button.addEventListener('click',function(){
search.classList.toggle('hidden');
})
search.addEventListener('mouseover',function(){
    search.classList.remove('hidden')
})
search.addEventListener('mouseout',function(){
    search.classList.add('hidden')
})
// slideshow
