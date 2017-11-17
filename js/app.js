window.addEventListener('load',function(event){
    var title = document.querySelector('h1');
    var imagen = document.querySelector('img');
    title.addEventListener('mouseover',function(e){
        title.textContent='Hola mundo'; 
    });
    title.addEventListener('mouseout',function(e){
        e.target.textContent='Eventos en JS';
    });
    imagen.addEventListener('mouseover',function(e){
        e.target.src='assets/images/fun-7.jpg';
    });
    imagen.addEventListener('mouseout',function(e){
        imagen.src='assets/images/fun-6.jpg';
    });
});


/*console.log(e);
console.log(e.target);//recibe el evento
console.log(e.currentTarget);//escucha el evento=window(antes del addEventListener)*/