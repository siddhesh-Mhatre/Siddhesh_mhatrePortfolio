import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
function Contact() {
  return (
    <>
      <section className="contact" id="contact" data-aos="zoom-in">
        <div className="container">
          <div className="heading">
            <h1 className="underline">contact</h1>
          </div>
          <div className="contact-info">
            <p>
              On the off chance that you might want to connect with me, be it
              for investigating innovation, business, or to simply say hello,
              don't hesitate to send me an email at 
            </p>
            <p className="row"><MailOutlineIcon/> <em className="span-light">siddeshmhatre1649@gmail.com</em> 
              <PhoneIphoneRoundedIcon/>  <em className="span-light">+91 989 286 5762</em></p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
