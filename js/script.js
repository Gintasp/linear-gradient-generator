let back=document.querySelector('.screen'),
      color1=document.querySelector('#color1'),
      color2=document.querySelector('#color2'),
      degree=document.querySelector('#angle'),
      submit=document.querySelector('#submit'),
      output=document.querySelector('#output');

let change=() => {
    back.style.background=`linear-gradient(${degree.value}deg,${color1.value},${color2.value})`;
    output.value=`linear-gradient(${degree.value}deg,${color1.value},${color2.value})`;
}

submit.addEventListener('click',function(){
    change();
})

degree.addEventListener('change',function(){
    change();
})