let row = prompt("enter no of rows");
let column = prompt("enter no of column");
let parent = document.querySelector('.parent');
let btn = document.querySelector('.btn');
let a = 112;
let b = 112;
let c =112;
let array = [];





for(let i =1;i<= row;i++)
{
    let div = document.createElement('div');
    div.style.cssText = 'display:flex;flex-direction:column;flex:1;';
    
    div.setAttribute('id','id'+i.toString());

    parent.appendChild(div);

}

for(let j = 1;j<=row;j++)
{
    for (let k = 1;k<=column; k++)
    {
        let div = document.createElement('div');
        
        
        
        let parent1 = document.querySelector('#'+'id'+j.toString()); 
        div.classList.add('cell');
        div.classList.add('rell');
        div.style.cssText = 'flex:1;';
        a = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        c = Math.floor(Math.random()*255);
        console.log(a);
        console.log(b);
        console.log(c);
        
        
        
        
        div.addEventListener('mouseover',function(){div.style.setProperty('background-color','rgb('+a+','+b+','+c+')')});
        btn.addEventListener('click',function(){div.style.cssText='backgroound-color:aqua;flex:1;';});
        parent1.appendChild(div);

    }
}



