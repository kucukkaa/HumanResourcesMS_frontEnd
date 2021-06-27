import axios from "axios";

export default class CandidateResumeService{
    getCandidateResumes(){
        return axios.get("http://localhost:8080/api/candidateresume/getall")
    }
}