import axios from "axios";

export default class EmployerService {
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getEmployerById(employerId){
        return axios.get("http://localhost:8080/api/employers/getemployerbyid?userId="+ employerId)
    }
}
