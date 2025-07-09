import axios from "axios";
import { toast } from "vue3-toastify";

const a =  axios.create({
    baseURL:"http://localhost:3001"
})


export const apiController = {
    getHeaders(){
        let headers = {
            "Content-Type":"	application/json; charset=utf-8"
        }
        const token = localStorage.getItem("token")
        if(token){

            headers = {
                ...headers,
                "Authorization":`Beaerer ${localStorage.getItem("token")}`
            }
        }
        return headers
    },
    async get(url=""){
        try {
            const res = await a.get(url,{
                headers:this.getHeaders()
            })
            if(res.data){
                return res.data
            }

        } catch (error) {
            console.log(error,"error")
            toast(error.response.data.message,{type:"error"})
            return false
        }
    },
    async post(url,body){
        try {
            const res = await a.post(url,body,{
                headers:this.getHeaders()
            })
            if(res.data){
                return res.data
            }
        } catch (error) {
            console.log(error,"error")
            toast(error.response.data.message,{type:"error"})
            return false
        }
    }
}