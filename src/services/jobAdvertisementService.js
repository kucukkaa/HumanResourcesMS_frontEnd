import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/JobAdvertisements/getall")
    }

    postJobAdvertisement(values) {
        return axios({
            method: 'post',
            url: 'http://localhost:8080/api/JobAdvertisements/add',
            data: values
        })
    }
}