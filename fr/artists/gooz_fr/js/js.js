function navClick(btn)    
{    
    {    
        var btns = document.querySelectorAll('.cta-nav'), a = 0, b = btns.length;
        var sections = document.querySelectorAll('.section-content'), i = 0, l = sections.length;
    
    
        for (a; a < b; a++) {
            btns[a].classList.remove("-selected")
        }
    
        btn.classList.add("-selected")
    
        for (i; i < l; i++) {
            if (btn.dataset.cat == sections[i].id){
                sections[i].style.visibility = 'visible';
            }else{
                sections[i].style.visibility = 'hidden';
            }
        }
    }   
    
    for (a; a < b; a++) {
        btns[a].classList.remove("-selected")
    }

    btn.classList.add("-selected")

    for (i; i < l; i++) {
        if (btn.dataset.cat == sections[i].id){
            sections[i].style.visibility = 'visible';
        }else{
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