const campos = [ document.getElementById('nome'),
                 document.getElementById('sobrenome'),
                 document.getElementById('e-mail'),
                 document.getElementById('senha'),
               ];



function checkInfo(){
    let erros = document.getElementsByClassName('erro');
    let container = document.getElementsByClassName('container')
    
    campos.forEach((campo, index) => {
        if(campo.value.trim() != ''){ 
            campo.style.border = 'solid 1px green';
            erros[index].innerHTML = '';
            campo.style.color = '#000000';
        }else if(campo.value.trim() === ''){
            campo.style.border = 'solid 1px hsl(0, 100%, 74%)';
            campo.style.color = 'hsl(0, 100%, 74%)';
            container[0].style.height = '520px';
            
            switch(index) {
                case 0:
                    erros[index].innerHTML = 'First Name cannot be empty';
                    break;
                case 1:
                    erros[index].innerHTML = 'Last Name cannot be empty';
                    break;
                case 2:
                    erros[index].innerHTML = 'Looks like this is not an email';
                    break;
                case 3:
                    erros[index].innerHTML = 'Password cannot be empty';
                    break;
            }
        }else{
            campo.style.border = 'solid 1px #000000';
        }
    })
}



