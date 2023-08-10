import React, {useRef} from 'react';
import emailjs  from '@emailjs/browser';
// import Swal from 'sweetalert2';

function ContactForm() {

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_47eydzv", "template_1kkxqdr", form.current, "lXmTENz6XI9YHk4z8") 
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
      <div className='mx-auto max-w-[1240px] flex flex-col border-b-2 pb-12 border-sky-700'>
        <div className=' h-[20%] my-4 flex items-center justify-center'>
          <h1 className=' font-bold text-4xl text-white my-4 '>Contáctenos</h1>
        </div>
        <div>
          <form className=' h-[20%] mx-auto my-auto md:p-0 ' ref={form} onSubmit={sendEmail}>
            <div className='flex w-full justify-center flex-wrap gap-4 '>
              <div className=' w-[100%] md:w-[45%]'>
                <input className='w-full mb-4 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id="name"
                  type="text" 
                  name="user_name"
                  placeholder='Ingrese su Nombre'
                />
                <input className='w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id="email"
                  type="email" 
                  name="user_email"
                  placeholder='Ingrese su email de contacto'

                />
              </div>
              <div className=' w-[100%] md:w-[45%] '>
                <textarea className='w-full min-h-[100px] h-full p-2 rounded-lg text-md text-slate-800 bg-sky-200 resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                id="message"
                name="message"
                placeholder='¿Cual es su consulta?'
              />
              </div>
              <input className=' bg-sky-400 text-white font-medium w-full md:w-[92%] text-center rounded-md py-3 hover:text-black hover:bg-[#019EDD] duration-300 ' type="submit" value="send" />
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

