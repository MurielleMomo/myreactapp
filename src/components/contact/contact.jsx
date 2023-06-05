import React from 'react'
import './contact.css'
import {MdOutlineEmail,MdArrowCircleRight} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
// emailjs.sendForm('service_5vuauza', 'template_fdnnl56', form.current,
// 'EmSdUNQzQuxkUqGWx')
// e.target.reset()
// .then((result) => {
// console.log(result.text)
// },(error) =>{
// console.log(error.text);
// });
var fromName = document.querySelector(`[name="name"]`).value;
var messageHtml = document.querySelector('#message').value;
var templateParams = {
  to_name: 'Momo Murielle',
  from_name: fromName,
  message: messageHtml
};
(function(){
  emailjs.init("acWjF4E-29Rh_j5YN");
})();

emailjs.send('service_q3do5p6', 'template_g2cod3e', templateParams)
  .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
    console.log('FAILED...', error);
  });
};
return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>

<div className="container contact__container">
<div className="contact__options">
<h3>By</h3>
<article className='contact__option'>

<MdOutlineEmail className='contact__option__icon'/>
<p>  <span><MdArrowCircleRight />  </span> Email</p>
<h5>muriellemomo155@gmail.com</h5>
<a href='mailto:muriellemomo155@gmail.com' target='_blank'   rel="noreferrer">send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<p> <span><MdArrowCircleRight />  </span>  LinkedIn</p>
<h5>Profile</h5>
<a href='#nothing'
>Tape me on LinkedIn</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<p>  <span><MdArrowCircleRight />  </span>  Whatsapp</p>
<h5>Direct message</h5>
<a href='https://web.whatsapp.com/send?phone=+237680373313'
target='_blank'   rel="noreferrer">Text me on Whatsapp</a>
</article>
</div>
<div id="form"><h4>Sent me a direct message</h4>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder=' full name' required/><br /><br />
<input type="email" name='email' placeholder=' your email' required/><br /><br />
<textarea name="message" id="message" cols="30" rows="10"
placeholder=' your message' required></textarea><br /><br />
<button type="submit" className='btn btn-primary'>send message</button><br />
</form></div>
</div>
</section>
)
}
export default Contact