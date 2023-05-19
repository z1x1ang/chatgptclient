import { useState } from 'react'
import ChatBody from './components/ChatBody'
import ChatInput from './components/ChatInput'
import {useMutation} from 'react-query'
import { fetchResponse } from './api'
function App() {
  const [chat,setChat]=useState([])

  const mutation=useMutation({
    mutationFn:()=>{
      return fetchResponse(chat);
    },
    onSuccess: (data) => {
      setChat((prev) => [
        ...prev,
        { sender: 'ai', message: data.message.replace(/^，/, "")},
      ]);
    }
  })
  
  const sendMessage=async (message)=>{
    await Promise.resolve(setChat((prev)=>[...prev,message]))
    mutation.mutate();
  }
  return (

    <div className='bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justifiy-between align-middle'>
      {/* gradients */}
      <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div>

      {/* header */}
      <div className='uppercase font-bold text-2xl text-center
      mb-3'>ChatGPT</div>
      {/* right-contact */}

  <img src="./contact.png" width={30} alt="contact-button" title="联系作者" class="absolute top-7 lg:right-60 sm:right-10 hover:cursor-pointer ease-in duration-100 hover:scale-125"/>  

      {/* body */}
      <div className='h-[90%] overflow-auto w-full max-w-4xl
      min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent 
      scrollbar-thumb-border-rounded-md 
      '>
        <ChatBody chat={chat}/></div>
      {/* input */}
      <div className='w-full max-w-4xl min=[20rem] self-center mb-2'>
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading}/>
      </div>
      {/* info */}
      <p className="info">基于gpt3.5-turbo接口开发</p>
    </div>
  )
}

export default App
