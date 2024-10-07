function navClick(element)    
{    
    {    
        var btn = element;
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

function logoClick(element)    
{    
    var screen = document.querySelector('.screen');
    var partners = document.querySelector('.partners');
    var media = document.querySelector('.media');
    var footer = document.querySelector('.footer');
    var logo = element;

    if (screen.style.display == "none"){
        logo.src = "images/EMG - Logo (Black)@10x.png";
        logo.style.cursor = "zoom-out";
        screen.style.display = "block";
        partners.style.display = "block";
        footer.style.display = "none";
    }else{
        logo.src = "images/EMG - Logo (Black)@10x.png";
        logo.style.cursor = "zoom-in";
        screen.style.display = "none";
        partners.style.display = "none";
        footer.style.display = "block";

    }
}   