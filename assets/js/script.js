let slider = document.getElementsByClassName('dbugle-slider');

[].forEach.call(slider,function(c){
    let next = c.getElementsByClassName('next')[0],
        previus = c.getElementsByClassName('previus')[0],
        buttonsContainer = c.getElementsByClassName('buttons')[0],
        inside = c.getElementsByClassName('inside')[0],
        imgs = c.getElementsByTagName('img'),
        current = 0,
        width = 100,
        buttons = [];
        ;

    for(let i = 0; i < imgs.length; i++){
        let b = document.createElement('span');
        b.classList.add('button');
        buttonsContainer.appendChild(b);
        buttons.push(b);

        b.addEventListener('click',function(){
            current = i;
            switchImg();
        });
    }
    function switchImg() {
        //img
        inside.style.transform = 'translate(-'+(width*current)+'%, 0)';
        
        //buttons
        buttons.forEach(function(b,i){
            if(i == current){
                b.classList.add('active');
            }else{
                b.classList.remove('active');
            }
        });
    }
    next.addEventListener('click',function(){
        current++;
        if(current >= imgs.length){
            current = 0;
        }
        switchImg();
    });
    previus.addEventListener('click',function(){
        current--;
        if(current < 0){
            current = imgs.length - 1;
        }
        switchImg();
    });
    switchImg();
});