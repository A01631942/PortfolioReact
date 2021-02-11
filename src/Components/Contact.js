// import react from "react"
import emailjs from "emailjs-com"
// import $ from 'jquery';


// send email using sendEmail js
function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_bjy2gl3', 'template_zeutqup', e.target, 'user_4pNpxOZdyNdFW3g456ruO')
      .then((result) => {
          console.log(result.text);
        //   change text 
        document.getElementById("sent").innerText="I'll get in touch with you soon"
        // show alert
        document.getElementsByClassName("alert")[0].classList.remove("d-none")
        // remove form
        document.getElementsByTagName("form")[0].classList.add("d-none")
        // show div
        document.getElementById("div-show").classList.remove("d-none")
        document.getElementById("div-show").classList.add("d-block")
      }, (error) => {
          console.log(error.text);
          alert("error");
      });
}

const Contact = () => {
    return ( 
        <section className="mt-2 mt-md-5">

            {/* show alert when submitted */}
            <div class="alert alert-success d-none" role="alert">
                Information Sent!
            </div> 
            
            {/* change text when submitted */}
            <h3 id="sent" className="mb-2 mb-md-5 text-center">Let's do great things together</h3>
            
            {/* div to show after clicking submit */}
            <div id="div-show" className="d-none">
                <p className="d-inline">If you have any further questions send me an email</p>
                <p className="d-inline"><img className="svg" src="../../imgs/mail.svg" alt=""/>   valeriatdesign@hotmail.com</p>
                <a href="/" className="btn btn-primary button d-block mx-auto my-3">Back to home</a>
            </div>

            {/* Form */}
            <form onSubmit={sendEmail}>
            {/* Row for name, and email */}
                <div className="row justify-content-around">
                    <div className="col-lg-10 col-12">
                        <div id="row" className="row">
                            {/* Name */}
                            <div className="col-12 col-sm-6">
                                <label for="name">Name</label>
                                <input id="name" type="text" className="form-control" name ="name" placeholder="eg. Michael Johnson" required />
                            </div>
                            {/* Email */}
                            <div className="col-12 col-sm-6">                            
                                <label for="email">Email</label>
                                <input type="email" className="form-control" name="email" placeholder="email@example.com" required/>
                            </div>
                            {/* Lada */}
                            <div className="col-4 col-md-3 col-lg-2">                                
                                <label for="lada"><span className="d-none d-md-inline">Country</span> Lada</label>
                                <input type="number" className="form-control" name="lada" placeholder="52" required/>
                            </div>
                            {/* Phone */}
                            <div className="col-8 col-md-3 col-lg-4">
                                <label for="phone">Phone</label>
                                <input type="number" className="form-control" name="phone" placeholder="3333333333" required/>
                            </div>
                            {/* Contact Form */}
                            <div className="col-12 col-md-6 col-lg-6">
                                {/* <div class="form-group"> */}
                                    <label for="contactForm">Preferred Contact By</label>
                                    <select class="form-control" id="contactForm" name="contact">
                                    <option value="-" disabled="disabled" selected="selected">-</option>
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                    </select>
                            </div>
                            {/* About your project */}
                            <div className="col-12">
                                <label for="contactForm">About your project</label>
                                <textarea className="form-control" cols="20" rows="5" name="message"></textarea>
                            </div>

                        </div>

                    </div>
                </div>
                {/* Button */}
                <button type="submit" class="button btn btn-sm my-3">Send</button>
            </form>
        </section>
     );
}
 
export default Contact;