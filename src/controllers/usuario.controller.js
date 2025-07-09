import { apiController } from "./api.controller";

const ENDPOINTS = {
    RETRIEVE: "/usuarios/retrieve",
    USUARIOS:"/usuarios",
    LOGIN:"/login"
}

export const usuarioController={
    retrieve:async ()=>{
        return await apiController.get(ENDPOINTS.RETRIEVE)
    },
    register:async(dados)=>{
        return await apiController.post(ENDPOINTS.USUARIOS,dados)
    },
    login:async(dados)=>{
        return await apiController.post(ENDPOINTS.LOGIN,dados)
    }
}