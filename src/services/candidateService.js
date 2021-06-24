import axios from "axios";

export default class candidateService{
    getCandidates(){
        axios.get("http://localhost:8080/api/candidates/getall")
    }
}