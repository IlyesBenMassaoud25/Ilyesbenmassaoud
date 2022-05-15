const values= document.querySelectorAll('.col-3');
const screen= document.querySelector('p');
const equal= document.querySelector('.equal');
const reset= document.querySelector('.res');
const number1 = document.querySelector('.number1')
const number2 = document.querySelector('.number2')
const number3 = document.querySelector('.number3')

// LISTENERS 
let expression = "";
let result ="";
let execute='';

equal.addEventListener("click", function (){
    result = eval(expression);
    if(!(expression==='')){
        screen.innerHTML = result;
        expression = result;
    }else{
        console.log(screen.innerHTML);
    }
});

reset.addEventListener("click", function res(){
    expression ='';
    screen.innerHTML = '0';
})

// CALCULATIONS

values.forEach(function (e) {
    e.addEventListener("click", function () {
        if(e.innerText==='DEL'){
            if(screen.innerHTML===''){
                screen.innerHTML='0';
            }else{
                if(screen.innerHTML.slice(0, -1)===''){
                    screen.innerHTML='0';
                    expression='';
                }else{
                    screen.innerHTML = screen.innerHTML.slice(0, -1);
                    expression = screen.innerHTML ;
                }
            }
        }else{
            expression += e.innerText;
            screen.innerHTML = expression;
        }
        
    })
})



// THEMES CHANGES
const body = document.querySelector('body')
const circle2 = document.querySelector('.circle2')
const circle3 = document.querySelector('.circle3')
const circle = document.querySelector('.circle')
const circleclass = document.querySelector('.circle-class')
const col3 = document.querySelectorAll('.col-3')
const col6 = document.querySelectorAll('.col-6')
const aff = document.querySelector('.affichage')
const row = document.querySelector('.row-threet2')
const circle1 = document.querySelector('.circle')
const del = document.querySelectorAll('.del')
const c1 = document.querySelectorAll('.color1')
const ctr1 = document.querySelector('.ctr1')
const ctr2 = document.querySelector('.ctr2')
const ctr3 = document.querySelector('.ctr3')



number1.addEventListener('click', function numberone(){
    
    body.classList.add('bodyt')
    body.classList.remove('bodyt2')
    body.classList.remove('bodyt3')
    
    for(i=0;i<col3.length;i++){
        col3[i].classList.add('col-3t1')
        col3[i].classList.remove('col-3t2')
        col3[i].classList.remove('col-3t3')
        

    }
    
    col6[0].classList.add('col-6')
    col6[0].classList.remove('col-6t2')
    col6[0].classList.remove('col-6t3')
    
    
    col6[1].classList.add('col-6')
    col6[1].classList.remove('col-6t2')
    col6[1].classList.remove('col-6t3')
    

    circleclass.classList.add('circle-class')
    circleclass.classList.remove('circle-classt2')
    circleclass.classList.remove('circle-classt3')
    

    aff.classList.add('affichage')
    aff.classList.remove('affichaget2')
    aff.classList.remove('affichaget3')
    

    row.classList.add('row-three')
    row.classList.remove('row-threet2')
    row.classList.remove('row-threet3')
    
    del[0].classList.add('del')
    del[0].classList.remove('delt2')
    del[0].classList.remove('delt3')
    

    del[1].classList.add('del')
    del[1].classList.remove('delt2')
    del[1].classList.remove('delt2')
    
    circle2.classList.add('circle')
    circle3.classList.remove('circle')
    circle.classList.remove('circle')
    for(k=0;k<c1.length;k++){
        c1[k].classList.add('color1')
        c1[k].classList.remove('color2')
        c1[k].classList.remove('color3')
    }

    
})
ctr1.addEventListener('click', function numberone(){
    
    body.classList.add('bodyt')
    body.classList.remove('bodyt2')
    body.classList.remove('bodyt3')
    
    for(i=0;i<col3.length;i++){
        col3[i].classList.add('col-3t1')
        col3[i].classList.remove('col-3t2')
        col3[i].classList.remove('col-3t3')
        

    }
    
    col6[0].classList.add('col-6')
    col6[0].classList.remove('col-6t2')
    col6[0].classList.remove('col-6t3')
    
    
    col6[1].classList.add('col-6')
    col6[1].classList.remove('col-6t2')
    col6[1].classList.remove('col-6t3')
    

    circleclass.classList.add('circle-class')
    circleclass.classList.remove('circle-classt2')
    circleclass.classList.remove('circle-classt3')
    

    aff.classList.add('affichage')
    aff.classList.remove('affichaget2')
    aff.classList.remove('affichaget3')
    

    row.classList.add('row-three')
    row.classList.remove('row-threet2')
    row.classList.remove('row-threet3')
    
    del[0].classList.add('del')
    del[0].classList.remove('delt2')
    del[0].classList.remove('delt3')
    

    del[1].classList.add('del')
    del[1].classList.remove('delt2')
    del[1].classList.remove('delt2')
    
    circle2.classList.add('circle')
    circle3.classList.remove('circle')
    circle.classList.remove('circle')
    for(k=0;k<c1.length;k++){
        c1[k].classList.add('color1')
        c1[k].classList.remove('color2')
        c1[k].classList.remove('color3')
    }

    
})



number2.addEventListener('click', function numbertwo(){
    
    body.classList.add('bodyt2')
    body.classList.remove('bodyt3')
    body.classList.remove('bodyt')
    
    for(i=0;i<col3.length;i++){
        
        col3[i].classList.add('col-3t2')
        col3[i].classList.remove('col-3t3')
        col3[i].classList.remove('col-3t1')
        
    }
    
    
    col6[0].classList.add('col-6t2')
    col6[0].classList.remove('col-6t3')
    col6[0].classList.remove('col-6t')
    

    col6[1].classList.add('col-6t2')
    col6[1].classList.remove('col-6t3')
    col6[1].classList.remove('col-6t')
    

    circleclass.classList.add('circle-classt2')
    circleclass.classList.remove('circle-classt3')
    circleclass.classList.remove('circle-classt')
    

    aff.classList.add('affichaget2')
    aff.classList.remove('affichaget3')
    aff.classList.remove('affichaget')
    

    row.classList.add('row-threet2')
    row.classList.remove('row-threet3')
    row.classList.remove('row-threet')
    

    del[0].classList.add('delt2')
    del[0].classList.remove('delt3')
    del[0].classList.remove('delt')
    

    del[1].classList.add('delt2')
    del[1].classList.remove('delt3')
    del[1].classList.remove('delt')
    
    circle2.classList.remove('circle')
    circle.classList.add('circle')
    circle3.classList.remove('circle')

    for(k=0;k<c1.length;k++){
        c1[k].classList.add('color2')
        c1[k].classList.remove('color1')
        c1[k].classList.remove('color3')
    }
    
})
ctr2.addEventListener('click', function numbertwo(){
    
    body.classList.add('bodyt2')
    body.classList.remove('bodyt3')
    body.classList.remove('bodyt')
    
    for(i=0;i<col3.length;i++){
        
        col3[i].classList.add('col-3t2')
        col3[i].classList.remove('col-3t3')
        col3[i].classList.remove('col-3t1')
        
    }
    
    
    col6[0].classList.add('col-6t2')
    col6[0].classList.remove('col-6t3')
    col6[0].classList.remove('col-6t')
    

    col6[1].classList.add('col-6t2')
    col6[1].classList.remove('col-6t3')
    col6[1].classList.remove('col-6t')
    

    circleclass.classList.add('circle-classt2')
    circleclass.classList.remove('circle-classt3')
    circleclass.classList.remove('circle-classt')
    

    aff.classList.add('affichaget2')
    aff.classList.remove('affichaget3')
    aff.classList.remove('affichaget')
    

    row.classList.add('row-threet2')
    row.classList.remove('row-threet3')
    row.classList.remove('row-threet')
    

    del[0].classList.add('delt2')
    del[0].classList.remove('delt3')
    del[0].classList.remove('delt')
    

    del[1].classList.add('delt2')
    del[1].classList.remove('delt3')
    del[1].classList.remove('delt')
    
    circle2.classList.remove('circle')
    circle.classList.add('circle')
    circle3.classList.remove('circle')

    for(k=0;k<c1.length;k++){
        c1[k].classList.add('color2')
        c1[k].classList.remove('color1')
        c1[k].classList.remove('color3')
    }
    
})



number3.addEventListener('click', function numberthree(){

    body.classList.add('bodyt3')
    body.classList.remove('bodyt2')
    body.classList.remove('bodyt')
    

    for(i=0;i<col3.length;i++){
        
        col3[i].classList.add('col-3t3')
        col3[i].classList.remove('col-3t2')
        col3[i].classList.remove('col-3t1')
        
    }
    

    col6[0].classList.add('col-6t3')
    col6[0].classList.remove('col-6t2')
    col6[0].classList.remove('col-6t')
    

    col6[1].classList.add('col-6t3')
    col6[1].classList.remove('col-6t2')
    col6[1].classList.add('col-6t')
    

    circleclass.classList.add('circle-classt3')
    circleclass.classList.remove('circle-classt2')
    circleclass.classList.remove('circle-classt')
    

    aff.classList.add('affichaget3')
    aff.classList.remove('affichaget2')
    aff.classList.remove('affichaget')
    

    row.classList.add('row-threet3')
    row.classList.remove('row-threet2')
    row.classList.remove('row-threet')
    

    del[0].classList.add('delt3')
    del[0].classList.remove('delt2')
    del[0].classList.remove('del')
    

    del[1].classList.add('delt3')
    del[1].classList.remove('delt2')
    del[1].classList.remove('del')
    
    circle2.classList.remove('circle')
    circle.classList.remove('circle')
    circle3.classList.add('circle')

    for(k=0;k<c1.length;k++){
        c1[k].classList.add('color3')
        c1[k].classList.remove('color1')
        c1[k].classList.remove('color2')
    }
    
})
ctr3.addEventListener('click', function numberthree(){

    body.classList.add('bodyt3')
    body.classList.remove('bodyt2')
    body.classList.remove('bodyt')
    

    for(i=0;i<col3.length;i++){
        
        col3[i].classList.add('col-3t3')
        col3[i].classList.remove('col-3t2')
        col3[i].classList.remove('col-3t1')
        
    }
    

    col6[0].classList.add('col-6t3')
    col6[0].classList.remove('col-6t2')
    col6[0].classList.remove('col-6t')
    

    col6[1].classList.add('col-6t3')
    col6[1].classList.remove('col-6t2')
    col6[1].classList.add('col-6t')
    

    circleclass.classList.add('circle-classt3')
    circleclass.classList.remove('circle-classt2')
    circleclass.classList.remove('circle-classt')
    

    aff.classList.add('affichaget3')
    aff.classList.remove('affichaget2')
    aff.classList.remove('affichaget')
    

    row.classList.add('row-threet3')
    row.classList.remove('row-threet2')
    row.classList.remove('row-threet')
    

    del[0].classList.add('delt3')
    del[0].classList.remove('delt2')
    del[0].classList.remove('del')
    

    del[1].classList.add('delt3')
    del[1].classList.remove('delt2')
    del[1].classList.remove('del')
    
    circle2.classList.remove('circle')
    circle.classList.remove('circle')
    circle3.classList.add('circle')

    for(k=0;k<c1.length;k++){
        c1[k].classList.add('color3')
        c1[k].classList.remove('color1')
        c1[k].classList.remove('color2')
    }
    
})