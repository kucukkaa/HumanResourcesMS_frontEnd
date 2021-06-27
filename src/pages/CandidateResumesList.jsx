import React, { useState, useEffect } from "react";
import CandidateResumeService from "../services/candidateResumeService";
import { Icon, Menu, Table } from "semantic-ui-react";

export default function CandidateResumesList() {
    const [candidateResumes, setCandidateResumes] = useState([]);

    useEffect(() => {
        let candidateResumeService = new CandidateResumeService()
        candidateResumeService.getCandidateResumes().then((result)=>setCandidateResumes(result.data.data))
        console.log(candidateResumes)
    }, [])
    
    return (
        <div>
            
    </div>
     
    )
}
