export const LoginAPI = () =>{
    return new Promise<{data:string}>((resolve) =>{
        setTimeout(()=>{
            let random = Math.floor(Math.random() * 2);
            if (random >= 1) return resolve({data:"abcdefasasdas"});
            else return resolve({data:""});
        },1000);
    });
}