import React from 'react';
import './feedback.css'
// function InputDetails (props)
//  {
//     return(
//         <div class="contact"> 
//         <div class="contact-form">
//             {props.data.map((item) =>
//             <label for={item.label_for}>
//             <span class="input-name">
//                 {item.name_of_entry}
//             </span>
//             {if(item.label_for === "project-info"){
//                 <textarea type="text" name={item.name} id={item.id} className={item.class} > </textarea>
//             }
//             else{
//                 <input type="text" name={item.name} id={item.id} className={item.class} />
//             }    
//             }
//                     <input type="text" name={item.name} id={item.id} className={item.class} />
//             </label>
//             )}
//         </div>
//         </div>
//     )
//  }
/**
 * displays the feedback page for the site
 * @returns feedback page
 */
function Feedback() {
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
export default Feedback;