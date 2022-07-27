const btnMenu = document.querySelector('.btn-menu');
const btnCloneMenu = document.querySelector('.btn-close');
const mnMobile = document.querySelector('.menu-mobile');
const linksMnMobile = mnMobile.querySelectorAll('a');

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let count = 0;
let countOdd = 2;

const btnShowMore = document.querySelector(".show-more");


btnMenu.addEventListener('click', ()=>{
    menuMobile('hidden');
});

btnCloneMenu.addEventListener('click', ()=>{
    menuMobile('visible');
});

closeMenuWithTagA(linksMnMobile);

arrowLeft.addEventListener('click', ()=> {
    changeSlides('left');
});

arrowRight.addEventListener('click', ()=> {
    changeSlides('right');
});

btnShowMore.addEventListener('click',showMoreProject);

window.addEventListener('load',selectNumberDivsTecno);

window.addEventListener('resize',selectNumberDivsTecno);

//Funções

function menuMobile(valor){
    const html = document.querySelector("html");
    mnMobile.classList.toggle('active');
    html.style.overflow = valor;
}

function closeMenuWithTagA(elem){
    elem.forEach(el =>{
        el.addEventListener('click', ()=>{
            menuMobile('visible');
        })
    })
}

function changeSlides(direcao){
    const wth = getWidthBrowser();
    const divsTecno = getElementsDivsTecno();
    const max = divsTecno.length;

    if(wth >= 500){
        if(direcao == 'right'){
            while (count < countOdd) {
                divsTecno[count].classList.remove('selected');
                count++;
            }
    
            if(count >= 6){
                count = 0;
                countOdd = 2;
            } else{
                countOdd += 2;
            }
    
            while(count < countOdd){
                divsTecno[count].classList.add('selected');
                count++;
            }
            count -= 2;
        
        } else if('left'){
            while(countOdd > count){
                countOdd--;
                divsTecno[countOdd].classList.remove('selected');
            }

            count -= 2;

            if(count < 0){
                count = max - 2;
                countOdd = max;
            }

            while(countOdd > count){
                countOdd--;
                divsTecno[countOdd].classList.add('selected');
            }

            countOdd += 2;
        }
    }else{
        divsTecno[count].classList.remove('selected');

        if(direcao == 'left'){
            count--;

            if(count < 0){
                count = max - 1;
            }
        } else{
            count++;

            if(count >= max){
                count = 0;
            }
        }
        
        divsTecno[count].classList.add('selected');
    }
}

function showMoreProject(){
    const divsProject = document.querySelectorAll('.project-box .project');
    
    divsProject.forEach(elm =>{
        elm.classList.remove('not-show');
    });

    btnShowMore.classList.add('not-show');

}

function getWidthBrowser(){
    let wth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return wth;
}

function getElementsDivsTecno(){
    const divCarrosel = document.querySelector(".carrosel");
    const divTecno = divCarrosel.querySelectorAll(".technology");
    return divTecno;
}

function selectNumberDivsTecno(){
    let elementosDivs = getElementsDivsTecno();
    if(getWidthBrowser() >= 500){
        elementosDivs[1].classList.add('selected');
    } else{
        elementosDivs[1].classList.remove('selected');
    }
}