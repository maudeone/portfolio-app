import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from 'react-hook-form';

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();

    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_QfdA74Jd6wbuEMS3YkgYB";

    const onSubmit = (data, reset) => {
        sendEmail(
            serviceID, 
            templateID, 
            {
              name: data.name,
              phone: data.phone,
              email: data.email,
              subject: data.subject,
              description: data.description  
            },
            userID
        )
        reset.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I will contact you ASAP.")
          }).catch(err => console.error(`Something went wrong ${err}`));
      };

    return (
      <div id="contact" className="contact">
        <div className="text-center"> 
          <h1>Contact me</h1>
          <p>Please fill out this form to get in touch with me and I will contact
            you as soon as possible.</p>
          <span className="success-message">{successMessage}</span>        
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>  
            <div className="row">
              <div className="col-md-6 col-xs-12">
                {/* Name Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  {...register('name',
                    {required: "Please enter your name",
                    maxLength: {
                      value: 25,
                      message: "Please enter a name with newer than 25 characters"
                    } 
                    })    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.name && errors.name.message }    
                </span>
                {/* Phone Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  {...register('phone',
                    {required: "Please enter your phone number"})    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.phone && errors.phone.message }    
                </span>
                {/* Email Input */}
                <div className="text-center">
                  <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...register('email',
                    {required: "Please enter a valid email address",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address" 
                    }
                    })    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.email && errors.email.message }    
                </span>
                {/* Subject Input */}
                <div className="text-center">
                  <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  {...register('subject',
                    {required: "Oops you forgot to add a subject"})    
                  }
                  />
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.subject && errors.subject.message }    
                </span>
              </div>
              <div className="col-md-6 col-xs-12">
                {/* Description */}
                <div className="text-center">
                  <textarea
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  {...register('description',
                    {required: "Please describe why you are reaching out"})    
                  }
                  ></textarea>
                  <div className="line"></div>
                </div>
                <span className="error-message">
                  {errors.description && errors.description.message }    
                </span>
              </div>
              <div className="btn-container">
                <button className="btn-main-offer contact-btn" type="submit">contact me</button> 
              </div> 
            </div>
          </form>
        </div>     
      </div>
    )
}

export default Contact
