import React from "react";
import './css/Bericht.css';
import Banner from './css/bar.jpeg';

export default function Bericht(){
    return(
        <div className="BerichtenBox">
            <div className="bericht">
                <img src={Banner} alt="Studentenbar"/>
                <div className="like">
                    <input id="like" type="checkbox" onClick={Like}/>
                    <span id="likeCounter">0</span>
                </div>
                <div className="textBox">
                    <h2>Title</h2>
                    <p>lorem ipsum</p>
                </div>
            </div>
        </div>
    );
}



function Like() {
    const like = document.getElementById("like");   
    const counter = document.getElementById("likeCounter").innerHTML;
    let aantal = parseInt(counter);   
    
    like.addEventListener("click", function(){
        if(like === 'checked'){
            aantal = parseInt(counter) + 1;
            document.getElementById("likeCounter").innerHTML = aantal;    
        }else if(like !== 'checked'){
            aantal = parseInt(counter) - 1;
            document.getElementById("likeCounter").innerHTML = aantal;
        }
    });
 
}