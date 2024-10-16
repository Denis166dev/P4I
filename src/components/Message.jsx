import style from "./Message.module.css";
import { useState, useEffect } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function Message({tipo, mensagem}) {
    const [visivel, setVisivel] = useState(false)

    useEffect(() => {
        if(!mensagem){
            setVisivel(false)
            return
        }
        setVisivel(true);
        const timer = setTimeout(() => {
            setVisivel(false);
        }, 3000)

        return () => clearTimeout(timer)

    },[mensagem])
    return (
        <>
        {visivel &&  (<div className={`${style.msg} ${style.sucesso}`}>
        <div style={{alignItems: 'center', justifycontent: 'center'}}>
                    <BsCheckCircleFill /> <h>{mensagem}</h>
                </div>
        </div>)}
        </>

       
    )
}
export default Message;
