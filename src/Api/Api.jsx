import axios from "axios"


const BaseUrl = 'http://127.0.0.1:3002'

export const getTrainerDetails= async()=>{
    try{
        return await axios.get(`${BaseUrl}/users`)
    }
    catch(error){
        console.log("error while calling data",error.message);
    }
}

export const getAbout= async()=>{
    try{
        return await axios.get(`${BaseUrl}/about`)
    }
    catch(error){
        console.log("error while calling data",error.message);
    }
}

export const getCourse=async()=>{
    try{
        return await axios.get(`${BaseUrl}/courses`)

    }
    catch(error){
        console.log("error while calling data",error.message);
    }
}


//contact User Data
export const addUser = async (data) => {
    try {
        return await axios.post(`${BaseUrl}/contact`, data)
    }
    catch (error) {
        console.log('Error while calling addUser API', error.message)
    }
}