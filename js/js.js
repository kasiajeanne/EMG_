function navClick(btn) {
    var btns = document.querySelectorAll('.cta-nav'), 
        sections = document.querySelectorAll('.section-content'), 
        a = 0, b = btns.length, 
        i = 0, l = sections.length;

    // Remove selected class from all buttons and reset icon rotation
    for (a; a < b; a++) {
        btns[a].classList.remove("-selected");
        var icon = btns[a].querySelector('.rotate-icon');
        if (icon) {
            icon.classList.remove("rotated");
        }
    }

    // Add selected class to the clicked button
    btn.classList.add("-selected");

    // Rotate the icon inside the clicked button
    var clickedIcon = btn.querySelector('.rotate-icon');
    if (clickedIcon) {
        clickedIcon.classList.toggle("rotated");
    }

    // Show/hide sections based on data-cat attribute
    for (i; i < l; i++) {
        if (btn.dataset.cat == sections[i].id) {
            sections[i].style.visibility = 'visible';
        } else {
            sections[i].style.visibility = 'hidden';
        }
    }
}

function logoClick(logo)    
{    
    var screen = document.querySelector('.screen');
    var partners = document.querySelector('.partners');
    var footer = document.querySelector('.footer');

    if (screen.style.display == "none"){
        logo.style.cursor = "zoom-out";
        screen.style.display = "block";
        partners.style.display = "block";
        footer.style.display = "none";
    }else{
        logo.style.cursor = "zoom-in";
        screen.style.display = "none";
        partners.style.display = "none";
        footer.style.display = "block";

    }
}   
