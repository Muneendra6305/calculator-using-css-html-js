let inputBox=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');
let string='';
buttons.forEach(element=>{
    element.addEventListener('click',(b)=>{
        if(b.target.innerText=='=')
        {
            string=String(eval(string));
            inputBox.value=string;
        }
        else if(b.target.innerText=='AC')
        {
            string='';
            inputBox.value=string;
            inputBox1.value=string;
        }
        else if(b.target.innerText=='DEL')
        {
            string=string.substring(0,string.length-1);
            inputBox.value=string;
            inputBox1.value=string;
        }
        else if(b.target.id=='plus-')
        {
            string=String(-eval(string));
            inputBox.value=string;
            inputBox1.value=string;
        }
        else{
            string=string+b.target.innerText;
            inputBox.value=string;
            inputBox1.value=string;
        }
    });
})
