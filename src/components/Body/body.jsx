import styles from "./body.module.css";
import {MdMessage} from "react-icons/md";
import { MdCall } from "react-icons/md";
const Body =()=>{
    const onViaCall=()=>{
        console.log("Call here");
        alert("Call here");
    };
    const onViaChat=()=>{
        console.log("I am Chat Bot");
        alert("Chat here");
    };
    const onViaEmail=()=>{
        console.log(prompt("Enter email"));
        
    };
    return(
        <div class={styles.outer}>
        <div class={`container ${styles.container}`}>
            <div className={`buttons ${styles.buttons}`}>
            <button 
            onClick={onViaChat}
            class= {`chat ${styles.but}`} >
            <MdMessage className={`ic ${styles.icon}`}/>
             <h3> Via Support Chat </h3>
                
            </button>
            <button 
            onClick={onViaCall}
            class={`call ${styles.but}`}>
                <MdCall className={`ic ${styles.icon2}`}/>
           <h3> Via Call</h3>
            </button>
            </div>
            <div className="email_form">
                <button 
                onClick={onViaEmail}
                className={`email ${styles.email}`}>
                <MdMessage className={`ic ${styles.icon}`}/>
                <h3>Via Email Form </h3>
                </button>
                </div>
                
            </div>
            <div class={`immg ${styles.image}`}>
            <img src="/images/service.png" ></img>
            </div>
            </div>
           
            
        
    )
};
export default Body;