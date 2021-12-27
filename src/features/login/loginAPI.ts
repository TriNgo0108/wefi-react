export const LoginAPI = () =>{
    return new Promise<{token:string,code:number}>((resolve) =>{
        setTimeout(()=>{
            let random = Math.floor(Math.random() * 2);
            if (random >= 1) return resolve({token:"abcdefasasdas",code:200});
            else return resolve({token:"",code:401});
        },1000);
    });
}