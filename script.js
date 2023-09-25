const qtdVisitas = localStorage.getItem('quantidade');
const tema = localStorage.getItem('tema');

window.onload = function() {

  if(qtdVisitas == null){
    localStorage.setItem('quantidade', 1);
  }else{
    localStorage.setItem('quantidade', +qtdVisitas+1);
  }
  
  if(tema == 'dark'){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }else if(tema == 'light') {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }

  document.getElementById('contador').innerHTML += qtdVisitas; 
  
  if(tema === null){
    localStorage.setItem('tema', 'light');
  }  
};


const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', function(){

    if(tema == 'light'){
      localStorage.setItem('tema', 'dark');
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

    }else if(tema == 'dark'){
      localStorage.setItem('tema', 'light');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
});