import React, { useRef } from "react";
import "./Join.css";
import emailjs, { sendForm } from "@emailjs/browser";

const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cdjxq5o', 'template_6tlz6cj', form.current, 'AyPXmd5brQtfxCJPW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

	return (
		<div className="join" id="join-us">
			<div className="left-j">
				<hr />
				<div>
					<span className="stroke-text">READY TO</span>
					<span className="span-space">LEVEL UP</span>
				</div>
				<div>
					<span>YOUR BODY</span>
					<span className="stroke-text span-space">WITH US?</span>
				</div>
			</div>
			<div className="right-j">
				<form ref={form} action="" onSubmit={sendEmail} className="email-container">
                    <input type="email" name="user-email" placeholder="Enter your email address here..." required/>
                    <button className="btn">Join now</button>
                </form>
			</div>
		</div>
	);
};

export default Join;
