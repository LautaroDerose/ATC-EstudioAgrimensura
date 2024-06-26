import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


import Swal from 'sweetalert2';


const SuccesAlert = () => {

  Swal.fire({
    title: '<strong>Gracias!</strong>',
    icon: 'success',
    html:
      'Estamos en contacto,<br/> a la brevedad respondere su consulta. </br></br> ' +
      'Te invito a seguirme en ' +
      '<a href="https://www.instagram.com/atcagrimensura/?igshid=NjIwNzIyMDk2Mg%3D%3D" style="color:#019EDD; text-decoration: underline;">Instagram</a><br/> ',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: 'Thumbs up, great!'
  })
}
const emailAlert = () => {

  Swal.fire({
    title: '<strong>Los emails no coinciden</strong>',
    icon: 'warning',
    html:
      'Por favor verifique los campos.',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: 'Thumbs up, great!'
  })
}
const formAlert = () => {

  Swal.fire({
    title: '<strong>Error!</strong>',
    icon: 'error',
    html:
      'Por favor complete todos los campos </br> ',
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Ok!',
    confirmButtonAriaLabel: 'Thumbs up, great!'
  })
}

function ContactForm() {
  const form = useRef();
  const [emailMatch, setEmailMatch] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const phone = form.current.user_phone.value;
    const email = form.current.user_email.value;
    const confirmEmail = form.current.confirm_email.value;
    const message = form.current.message.value;

    if (!name || !phone || !email || !confirmEmail || !message) {
      formAlert()
      return;
    }

    if (email !== confirmEmail) {
      emailAlert()
      setEmailMatch(false);
      return;
    }

    emailjs
      .sendForm("service_47eydzv", "template_1kkxqdr", form.current, "lXmTENz6XI9YHk4z8")
      .then(
        (result) => {
          SuccesAlert()
          form.current.reset();
          setEmailMatch(true);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='mx-auto max-w-[1240px] flex flex-col border-b-2 pb-12 border-sky-700'>
      <div className=' h-[20%] my-4 flex items-center justify-center'>
        <h1 className=' font-bold text-4xl text-white my-4 '>Contáctenos</h1>;
      </div>
      <div>
        {isFormSubmitted ? (
          <form
            className=' h-[20%] mx-auto my-auto md:p-0'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='flex w-full justify-center flex-wrap gap-4 '>
              <div className=' w-[100%] md:w-[45%]'>
                <input
                  className='w-full mb-4 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='name'
                  type='text'
                  name='user_name'
                  placeholder='Ingrese su nombre'
                />
                <input
                  className='w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='tel'
                  type='tel'
                  name='user_phone'
                  placeholder='Ingrese su numero de contacto'
                />
                <input
                  className='w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='email'
                  type='email'
                  name='user_email'
                  placeholder='Ingrese su email de contacto'
                />
                <input
                  className={`w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300 ${emailMatch ? '' : 'bg-red-500'}`}
                  id='confirm_email'
                  type='email'
                  name='confirm_email'
                  placeholder='Confirme su email'
                  onChange={() => setEmailMatch(true)}
                />
              </div>
              <div className=' w-[100%] md:w-[45%] '>
                <textarea
                  className='w-full min-h-[100px] h-full p-2 rounded-lg text-md text-slate-800 bg-sky-200 resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='message'
                  name='message'
                  placeholder='¿Cuál es su consulta?'
                />
              </div>
              <input
                className='bg-sky-400 text-white font-medium w-full md:w-[92%] text-center rounded-md py-3 hover:text-black hover:bg-[#019EDD] duration-300 cursor-pointer'
                type='submit'
                value='Enviar'
              />

            </div>
          </form>
        ) : (
          <form
            className=' h-[20%] mx-auto my-auto md:p-0'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='flex w-full justify-center flex-wrap gap-4 '>
              <div className=' w-[100%] md:w-[45%]'>
                <input
                  className='w-full mb-4 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='name'
                  type='text'
                  name='user_name'
                  placeholder='Ingrese su nombre'
                />
                <input
                  className='w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='phone'
                  type='tel'
                  name='user_phone'
                  placeholder='Ingrese su numero de contacto'
                />
                <input
                  className='w-full my-1 p-2 rounded-lg text-md text-slate-800 bg-sky-200 outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='email'
                  type='email'
                  name='user_email'
                  placeholder='Ingrese su email de contacto'
                />
                <input
                  className={`w-full my-1 p-2 rounded-lg text-md bg-sky-200 outline-none duration-300 ${emailMatch ? '' : 'border-red-500'
                    }`}
                  id='confirm_email'
                  type='email'
                  name='confirm_email'
                  placeholder='Confirme su email'
                  onChange={() => setEmailMatch(true)}
                />
              </div>
              <div className=' w-[100%] md:w-[45%] '>
                <textarea
                  className='w-full min-h-[100px] h-full p-2 rounded-lg text-md text-slate-800 bg-sky-200 resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='message'
                  name='message'
                  placeholder='¿Cuál es su consulta?'
                />
              </div>
              <input
                className='bg-sky-400 text-white font-medium w-full md:w-[92%] text-center rounded-md py-3 hover:text-black hover:bg-[#019EDD] duration-300'
                type='submit'
                value='Enviar'
              />
            </div>
          </form>
        )}
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

