const dropdown = document.querySelector('.category');
 const category = document.querySelector('#category');
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