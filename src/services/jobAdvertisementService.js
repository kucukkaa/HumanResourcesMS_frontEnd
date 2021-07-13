import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobAdvertisements/getall")
    }

    addJobAdvertisement(jobAdvertisement) {
        return axios.post('http://localhost:8080/api/JobAdvertisements/add', jobAdvertisement)
    }

    getJobAdvertisementByIsActive(isActive){
        return axios.get("http://localhost:8080/api/JobAdvertisements/getJobAdvertisementByIsActive?isActive="+isActive)
    }

    getJobAdvertisementById(id){
        return axios.get("http://localhost:8080/api/JobAdvertisements/getjobadvertisementbyid?Id="+id)
    }
}