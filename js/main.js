function actualizarHora () {
  const horaMessage = document.querySelectorAll('.message-date')
  const ahora = new Date()

  const hours = ahora.getHours()
  const minutes = ahora.getMinutes()

  const ampm = hours >= 12 ? 'pm' : 'am'
  let hours12 = hours % 12
  hours12 = hours12 ? hours12 : 12

  const formateaHora = `${hours12}:${minutes} ${ampm}`

  horaMessage.forEach(reloj => {
    reloj.textContent = formateaHora
  })

}

setInterval(actualizarHora, 1000)

actualizarHora()


// ------------------------- ----------------------

const messageInput = document.querySelector('.action-form--input')
const microIcon = document.querySelector('.icon-mic')
const sendIcon = document.querySelector('.active')

messageInput.addEventListener('input', handleStatus)

function handleStatus () {
  if(messageInput.value.trim() !== '') {
    microIcon.style.display = 'none'
    sendIcon.style.display = 'block'
  } else {
    microIcon.style.display = 'block'
    sendIcon.style.display = 'none'
  }
}


// -------------------------------------  ------------------------

function acivacion () {

  const navChat = document.querySelectorAll('.base-card-message');
  const cerrarBuscadoChats = document.querySelector('.card-messange')
  
  navChat.forEach(botons => {
    botons.addEventListener('click', handleEntrarChat)
  })
  
  function handleEntrarChat () {
    const sectionEntrarChat = document.querySelector('.active-layout')
  
    if(!sectionEntrarChat) {
       cerrarBuscadoChats.classList.add('oculta-cardMessage')
     }
     else {
       sectionEntrarChat.classList.remove('active-layout')
      }
  }
  
  
  // -------------------------------
  
  const arrowLeftReturn = document.querySelector('.icon-arrow-left') 
  
  arrowLeftReturn.addEventListener('click', handleArrowReturn)
  
  function handleArrowReturn () {
  const sectionActualChat = document.querySelector('.layout-main')
  
  if(sectionActualChat) {
    sectionActualChat.classList.add('active-layout')
  } if (cerrarBuscadoChats) {
    cerrarBuscadoChats.classList.remove('oculta-cardMessage')
  }
  }
}

acivacion()


const formulario = document.querySelector('.action-form')
const valorInput = document.querySelector('.action-form--input')
const textoMostrado = document.querySelector('.message-text')
const hidden = document.querySelector('.hidden')

formulario.addEventListener('submit', function(e) {
  e.preventDefault()

  if(hidden) {
    hidden.classList.remove('hidden')
    const textIngresado = valorInput.value
    textoMostrado.textContent = `${textIngresado}`
  }
})


// ------------------------------------------------- ---------------------

function usuerActive () {
  const user = document.querySelector('.user-perfil')
  const cerrarChats = document.querySelector('.card-messange')


  user.addEventListener('click', handleUser)
  
  function handleUser () {
    const perfilUser = document.querySelector('.perfil-acivado')
    
  
  if(!perfilUser) {
    cerrarChats.classList.add('oculta-cardMessage')
  }else{
    perfilUser.classList.remove('perfil-acivado')
  }

}
// ----------------------------

const returnCardMessage = document.querySelector('.icon-arrow-left-perfil')

returnCardMessage.addEventListener('click', handleReturnCard)


function handleReturnCard () {
  const perfilUserActual = document.querySelector('.perfil')

  if(perfilUserActual) {
    console.log('click')
    perfilUserActual.classList.add('perfil-oculto')
  }if(cerrarChats) {
    cerrarChats.classList.remove('oculta-cardMessage')
  }
}
}

usuerActive()


/* ------------------------------------------------- */

const buscarMessage = document.querySelector('.icon-search-buscar')

// buscarMessage.forEach(element => {
//   element.addEventListener('click', handleBuscador)
// })

buscarMessage.addEventListener('click', handleBuscador)

function handleBuscador () {
  console.log('click')
}

// -----------------------------------------------

$(document).ready(function() {
  $('.card-messangeInput').each(function() {
    const inputField = $(this);
    const clearButton = inputField.next('.icon-x-2');
    const hiddenDivs = $('.hidden-div')

    inputField.on('input', function() {
      if (inputField.val().length > 0) {
        clearButton.show();
        hiddenDivs.show();
      } else {
        clearButton.hide();
        hiddenDivs.hide();
      }

      // if (inputField.val().length > 0) {
        
      // } else {
        
      // }
    });

    clearButton.on('click', function() {
      inputField.val('');
      clearButton.hide();
      hiddenDivs.hide()
    });
  });
});


// -----------------

const buscarInfo = document.querySelector('.icon-search-buscar')
const ocultaMain = document.querySelector('.layout-main')
const activarBuscador = document.querySelector('.buscarMessage')


const cerrarBuscadorMessage = document.querySelector('.icon-x')
cerrarBuscadorMessage.addEventListener('click', handleCerrar)

buscarInfo.addEventListener('click', handleAbrirBuscador)

function handleAbrirBuscador () {
  if(buscarInfo) {
    ocultaMain.style.display = 'none'
    activarBuscador.style.display = 'block'
  } 

}

function handleCerrar () {
  if(cerrarBuscadorMessage) {
    ocultaMain.style.display = 'block'
    activarBuscador.style.display = 'none'
  }
}





