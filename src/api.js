export const fetchResponse=async(chat)=>{
    try{

        const response = await fetch('删除此处，加上vercel分配的server地址（或自己代理后的域名）',{
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                message:chat.map((message)=>message.message).join('\n')
            })

        })
        const data=await response.json()
        return data
    }catch(erro){

    }
}
