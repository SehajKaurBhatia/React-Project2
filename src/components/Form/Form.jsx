import styles from "./Form.module.css"
import {useState} from 'react'
const Form =()=>{
    const [name,SetName]=useState(" ");
        const [email,SetEmail]=useState(" ");
        const [text,SetText]=useState(" ");
    const onSubmit=(event)=>{
        SetName(event.target[0].value);
        SetEmail(event.target[1].value);
        SetText(event.target[2].value);
        
        event.preventDefault();//prevents from refreshing the page
        
    console.log("Name:",event.target[0].value);//prints valus in console
    console.log("Email:",event.target[1].value);
    console.log("Text:",event.target[2].value);
    }
    return(
        
            <form onSubmit={onSubmit}
            className={`cont ${styles.container}`}>
                <div class={` ${styles.formcontent}`}>
                    <label htmlFor="Label">Name</label>
                <input type="text" name="name" required></input>
                <label htmlFor="Label">Email</label>
                <input type="email" name="email" required></input>
                <label htmlFor="Label">Text</label>
                <textarea class={styles.area} rows={6} required/>

                
               <button>
                Submit
               </button>
               <div>   {/* prints on the screen */}
                {name+" "+email+" "+text}
               </div>
                </div>
                
            </form>

    )
};
export default Form;