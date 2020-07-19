$('.nav ul li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
})

const tabBtn = document.querySelectorAll(".nav ulli");
const tab = document.querySelectorAll(".tab");

function tabs(panelIndex){
    tab.forEach(function(node){
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = "block";
}
tabs(0);

let bio = document.querySelector('.bio');
function biotext(){
    bio.oldText = bio.innerText;
    bio.innerText = bio.innerText.substring(0,100) + "...";
    bio.innerHTML += "&nbsp;" + `<span onclick = 'addLength()' id = 'see-more-bio'><u>See More</u> </span>`;
}
biotext();
function addLength(){
    bio.innerHTML = bio.oldText;
}