import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobAdvertisements/getall")
    }

    addJobAdvertisement(jobAdvertisement) {
        return axios.post('http://localhost:8080/api/JobAdvertisements/add', jobAdvertisement)
    }
}