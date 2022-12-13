import React from 'react';
import './contact.css'
function Contact() {
    return (
        <div class="contact">
            <h2 class="contact-title">
                Do you have a Feedback?or Ideas to improve.?<br />

            </h2>
            <div class="contact-form">
                <label for="name">
                    <span class="input-name">
                        Name:
                    </span>
                    <input type="text" name="name" id="name" class="name" />
                </label>
                <label for="email">
                    <span class="input-name">
                        Email address:
                    </span>
                    <input type="text" name="email" id="email" class="email" />
                </label>
                <label for="project-info">
                    <span class="input-name">
                        Tell about your thoughts:
                    </span>
                    <textarea name="project-info" id="project-info" class="project-info"></textarea>
                </label>
                <button class="btn send-btn">
                    Send
                </button>
            </div>
        </div>
    )
}
export default Contact;