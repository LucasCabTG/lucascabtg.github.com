const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


const bloque = document.querySelectorAll('.bloque')
const tituloacordeon = document.querySelectorAll('.tituloacordeon')

tituloacordeon.forEach( (cadatituloacordeon, i)=>{
    tituloacordeon[i].addEventListener('click', ()=>{
        bloque.forEach( (cadabloque, i)=>{
            bloque[i].classList.remove('activo') 
        })
        bloque[i].classList.add('activo')
    })
})


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_la2juoq';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});