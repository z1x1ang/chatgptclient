import React, { useRef} from 'react';
import autoAnimate from '@formkit/auto-animate';
import {useEffect} from "react"
const ChatBody=({chat})=> {
    const aiStyle="bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"

    const parent=useRef(null);
    const bottomRef=useRef(null);
    //onlu for aut animation
    useEffect(()=>{
        parent.current && autoAnimate(parent.current);
    },[parent])

    //for scrolling bottom
    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior:"smooth"},[chat]);
    })
    return (
        <div>
            <div className="flex flex-col gap-4" ref={parent}>
                {
                    chat.map((message,i)=>{
                        return(
                            <div key={i} className={`border-[#999999] break-words
                            border-2 rounded-xl self-end px-3 py-3 max-w-[80] ${message.sender==="ai"&& 
                            aiStyle}`}>
                                
                                <pre className='whitespace-pre-wrap'>
                                    <span>{message.message}</span>
                                </pre>
                            </div>  
                        );
                    })}

                <div ref={bottomRef} className='h-3'>

                </div>
                {/* client message */}
                {/* <div className='border-[#999999] break-words
                border-2 rounded-xl self-end px-3 py-3 max-w-[80]' >
                    
                    <pre className='whitespaces-pre-wrap'>
                        <span>hi CHAT GPT ,CAN YOU HELP ME?</span>
                    </pre>
                </div> */}

                {/* AI MESSAGE */}
                {/* <div className={` border-[#999999] break-words
                border-2 rounded-xl self-end px-3 py-3 max-w-[80]'>
                    <pre className='whitespaces-pre-wrap ${aiStyle} `}>
                        <pre>
                        <span>Yeah,I can help you with anything</span>
                    </pre>
                </div> */}
            </div>
        </div>
    );
}

export default ChatBody;