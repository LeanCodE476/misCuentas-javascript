let data = [];
const form = document.querySelector('#form1');
const tBody=document.querySelector('#table-body')


//----------------FUNCION LEER OBJETO-----------------------------\
const readAll = () => {
    
    let elements = '';
    
    data.map(value => {
        const { id, fecha, monto } = value;
        elements += `<tr>
        <td>${fecha}</td>
        <td>nota</td>
        <td>$${monto}</td>
        <td><button class="edit" onclick={edit(${id})}>Editar</button></td>
        <td><button class="delete" onclick={deleteF(${id})}>Eliminar</button></td>
        </tr>
        `;
    });
    tBody.innerHTML = elements;
    form.reset();
    
}
//Cancelar el enter

document.querySelector('#form1').addEventListener('submit', (e) => {
    e.preventDefault();
})


//--------------FUNCION AGREGAR OBJETO AL ARRAY-----------------------------------------

const add = () => {

    const monto = document.querySelector('#inputMonto').value;
    
    if (monto === '') {
        alert('Debes colocar un monto!!')
    } else if (monto.includes(" ")) {
        alert("El monto no debe contener espacios")
    } else if (isNaN(monto)) {
        alert("Coloca un numero!!")
    }
    else { 
        
        const fecha = new Date().toLocaleDateString("es-ES");
        
        const newObj = { id: Date.now(), fecha: fecha, monto: monto };
        
        data.push(newObj)

        
        sumador();
        
        readAll()
    }
}

const sumador = () => {
    
    let valorInit = 0;

    let sumatoria = data.reduce(function (acc, val) {

        return acc + parseInt(val.monto);

    }, valorInit);
    
    document.querySelector(".total").textContent = `Total $${sumatoria}`;
    
}
//-------------------FUNCION EDITAR-------------------------------
const edit = (id) => {
    
    document.querySelector('.modalAct').style.display = 'block';
    
    document.querySelector(".modalAct").addEventListener('click', (e) => {
        
        if (e.target.classList.contains('modalAct')) {
                            
            document.querySelector(".modalAct").style.display = "none";
             
        }
    });
                    
    let obj = data.find(obj => obj.id === id);
    
    document.querySelector('.id').value = obj.id
    document.querySelector(".fecha").value = obj.fecha;
    document.querySelector('.inputAct').value = obj.monto;
    
}
//--------------FUNCION ELIMINAR-------------------------

const deleteF = (id) => {
    
    if (confirm("Seguro que quieres eliminar este monto?")) {
        
        data = data.filter(data => data.id !== id);
    }
    sumador();
    readAll();
}

//------------------FUNCION ACTUALIZAR---------------
const update = () => {
    
    let id = parseInt(document.querySelector(".id").value);
    let fecha = document.querySelector(".fecha").value;
    let monto = document.querySelector('.inputAct').value;
    
    let index = data.findIndex(rec => rec.id === id);

    data[index] = { id, fecha, monto };
    
    document.querySelector(".modalAct").style.display = "none";
    
    sumador();
    readAll()
}
































































// let arrayMontos = [];

// const objetoMonto = {

//     id: '',
//     fecha: '',
//     monto: '',
    
// }

// let editando = false;

// const formulario = document.querySelector('#form1');
// const inputMonto = document.querySelector('#inputMonto');
// const btnAgregarMonto = document.querySelector('#btnAgregarMonto');

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (inputMonto.value === '') {
//         alert('debes colocar un monto para agregar');
//         return;
//     }

//     if (editando) {

//         editarMonto();

//         editando = false;
//     }
//     else {
//         objetoMonto.id = Date.now();
//         objetoMonto.fecha = new Date().toLocaleDateString("es-ES");
//         objetoMonto.monto = inputMonto.value;

//         agregarMonto();
      
//     }
  
// })

// //-------------------FUNCION PARA AGREGAR MONTO---------------------

// const agregarMonto = () => {

//     arrayMontos.push({ ...objetoMonto })
    
//     mostrarMontos();

//     formulario.reset();

//     limpiarObjeto();

// }

// //-------------FUNCION PARA LIMPIAR EL OBJETO------------------
// const limpiarObjeto = () => {
//     objetoMonto.id = '';
//     objetoMonto.fecha = '';
//     objetoMonto.monto = '';

// }

// //-------------------FUNCION IMPRIMIR MONTOS-----------------------


// const mostrarMontos = () => {
    
//     limpiarHTML();
//     const tableBody = document.querySelector('#table-body');

//     arrayMontos.forEach((montos) => {
//       const fila = document.createElement("tr");

//       const { id, fecha, monto } = montos;

    
//       fila.dataset.id = id;

//       fila.innerHTML = `
//             <td>${fecha}</td>
//             <td>nota</td>
//             <td class='celdaMonto'>${monto}</td>
//             <td><button class="btnEditar">Editar</button></td>
//             <td><button class="btnEliminar">Eliminar</button></td>`;

//       tableBody.appendChild(fila);

//       const editarBtn = document.querySelector(".btnEditar");

//       editarBtn.onclick=()=>actualizarMonto(montos);

//       const eliminarBtn = document.querySelector(".btnEliminar");

//       eliminarBtn.onclick=()=>eliminarMonto(id);
//     })
// }

// //---------------FUNCION PARA ACTUALIZAR MONTO---------------------

// const actualizarMonto= (objetoMonto) => {

//     const { id, monto } = objetoMonto;
    
//     objetoMonto.id = id;
//     inputMonto.value = monto;

//     editando = true;

    
// }

// //------------FUNCION PARA AGREGAR EL MONTO EDITADO---------


// const editarMonto = () => {

//     objetoMonto.monto = inputMonto.value;

//     arrayMontos.map(monto => {
//         if (monto.id === objetoMonto.id) {

//             monto.id = objetoMonto.id;
//             monto.monto = objetoMonto.monto;

//         }
//     })

//     limpiarHTML();

//     mostrarMontos()

//     formulario.reset();

//     editando = false;
    
// }

// //-----FUNCION ELIMINAR MONTO-------------


// const eliminarMonto = (id) => {
//     arrayMontos = arrayMontos.filter(monto => {
//         monto.id !== id
//     })

//     limpiarHTML();
//     mostrarMontos();
// }


// // --------------FUNCION PARA LIMPIAR EL HTML--------------------

// const limpiarHTML = () => {
//     const tableBody = document.querySelector("#table-body");

//     while (tableBody.firstChild) {
//         tableBody.removeChild(tableBody.firstChild)
//     }

// }




























































// let sumatoria = 0;
// let editando = false;
// const arrayObj = [];
// const objetoMonto = {
//     id: '',
//     fecha:'',
//     monto:''
// }

// const listaMonto = document.querySelector('#listaMonto');
// const formulario = document.querySelector('#form');
// const inputMonto = document.querySelector('#inputMonto');
// const btnEliminar = document.querySelector('.btnEliminar');
// const btnEditar = document.querySelector(".btnEditar");
// const btnAgregar = document.querySelector('#agregarMonto');

// // variables del modal
// const divModal = document.querySelector('.modalActualizarMonto')
// const formModal = document.querySelector("#formModal");
// const inputActualizar= document.querySelector("#inputActualizar");
// const btnActualizar = document.querySelector("#btnActualizar");



// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (inputMonto.value === '') {
//         alert('Debes colocar un monto!!!!');

//     } else {

//         agregarMonto();

//     }
      
// })

// //------------------FUNCION PARA AGREGAR MONTO--------------------------------

// const agregarMonto = () => {

//     const fecha = new Date();
    
//     objetoMonto.id = Date.now();
//     objetoMonto.fecha = fecha.toLocaleDateString('es-AR');
//     objetoMonto.monto = inputMonto.value;

//     arrayObj.push({...objetoMonto});
//     inputMonto.value = '';

//     mostrarMonto();
// }

// //---------------FUNCION PARA MOSTRAR EL MONTO EN HTML----------------------------

// const mostrarMonto = () => {
   
//     const fila = document.createElement('tr');
//     for (let i in arrayObj){

//         fila.setAttribute('id', arrayObj[i].id);
//         fila.innerHTML = `
//             <td>${arrayObj[i].fecha}</td>
//             <td>nota</td>
//             <td class='celdaMonto'>${arrayObj[i].monto}</td>
//             <td><button class="btnEditar">Editar</button></td>
//             <td><button class="btnEliminar">Eliminar</button></td>`;

//         listaMonto.appendChild(fila);
        
//     }
 
// }

// //--------------------------EVENTO PARA ELIMINAR LA FILA---------------

// listaMonto.addEventListener('click', (e) => {

//         if (e.target.classList.contains('btnEliminar')) {
          
//                 e.target.parentNode.parentNode.remove();
                
//             }
//             const id = e.target.parentNode.parentNode.id;
        
//             eliminarObjeto(id);
    
// })

// //--------------------------FUNCION PARA ELIMINAR LA FILA COMPLETA---------------
// const eliminarObjeto=(id)=> {
//         for (let i in arrayObj) {
    
//             if (arrayObj[i].id == id) {
//                 delete arrayObj[i];
//             }
//      }
    
// }

// //----------EDITAR MONTO--------

// const editarMonto = () => {
//     objetoMonto.monto = inputActualizar.value;

//     arrayObj.map(montos => {

//         if (montos.id == objetoMonto.id) {
//             montos.id = objetoMonto.id;
//         }
        
//     })
// }

// listaMonto.addEventListener('click', (e) => {
  
//     if (e.target.classList.contains("btnEditar")) {
//         divModal.style.display = "block";
//         console.log(e.target.parentNode.parentNode.id);
//         inputActualizar.value = e.target.parentNode.parentNode.children[2].textContent;
//         objetoMonto.id = e.target.parentNode.parentNode.id;
//         objetoMonto.monto = inputActualizar.value;
//     }
  

    
// })


// divModal.addEventListener('click', (e) => {

//      if (e.target.classList.contains("modalActualizarMonto")) {
//        divModal.style.display = "none";
//      }
   
// })

// formModal.addEventListener('submit', (e) => {
//     e.preventDefault();
// })

// // setInterval(() => {
// //     console.log(arrayObj);
// // },3000)












