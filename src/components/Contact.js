import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// import Swal from 'sweetalert2';

function ContactForm() {
  // const [state, handleSubmit] = useForm("xoqbjkbl");
  // if (state.succeeded) {
  //     return <p>Gracias por contactarse!</p>;
  // }

  // const showAlert = () => {
     
  //   Swal.fire({
  //     title: '<strong>Gracias!</strong>',
  //     icon: 'success',
  //     html:
  //     'Estamos en contacto <b>:)</b><br/><br/> ' +
  //     'Tambien puedes contactarme en ' +
  //     '<a href="https://www.linkedin.com/in/lautaro-derose-7322b6107/">LinkedIn</a><br/> ' +
  //     'O dejame un like en este ' +
  //     '<a href="https://www.linkedin.com/in/lautaro-derose-7322b6107/">Post</a> ' ,
  //     focusConfirm: false,
  //     confirmButtonText:
  //       '<i class="fa fa-thumbs-up"></i> Ok!',
  //     confirmButtonAriaLabel: 'Thumbs up, great!'
  //   })
  // }

  return (
      <div className='mx-auto max-w-[1240px] flex flex-col border-b-2 pb-12 border-sky-700'>
        <div className=' h-[20%] my-4 flex items-center justify-center'>
          <h1 className=' font-bold text-4xl text-white my-4 '>Contáctenos</h1>
        </div>
        <div>
          <form className=' h-[20%] mx-auto my-auto md:p-0 '>
          {/* <form className=' justify-items-center rounded-md border-palette1 p-4 md:p-0 ' onSubmit={handleSubmit}> */}
            <div className='flex w-full justify-center flex-wrap gap-4 '>
            <div className=' w-[100%] md:w-[45%]'>
              <input className='w-full mb-4 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                id="name"
                type="text" 
                name="name"
                placeholder='Nombre del emisario'
              />
              <input className='w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                id="email"
                type="email" 
                name="email"
                placeholder='Correo Electronico'

              />
              {/* <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              /> */}
              <input className='w-full mt-4 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                id="subject"
                type="text" 
                name="subject"
                placeholder='Asunto'
              />
            </div>
            
            <div className=' w-[100%] md:w-[45%] '>
              <textarea className='w-full min-h-[100px] h-full p-2 rounded-lg text-md text-slate-800 bg-sky-200 resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
              id="message"
              name="message"
              placeholder='¿Cual es su consulta?'
            />
            {/* <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            /> */}
            </div>
            <button className=' bg-sky-400 text-white font-medium w-full md:w-[92%] text-center rounded-md py-3 hover:text-black hover:bg-[#019EDD] duration-300 ' type="submit" >Enviar</button>
            {/* <button className=' bg-emerald-500 text-gray-900 font-medium w-full md:w-[92%] text-center rounded-md py-3 hover:text-emerald-500 hover:bg-palette1 duration-300 ' type="submit" disabled={state.submitting} onClick={showAlert}>Enviar</button> */}
            </div>
        </form>
        </div>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;

