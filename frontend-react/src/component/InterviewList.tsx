import React, { useEffect, useState } from 'react';
//@ts-ignore
import { List, Divider } from 'antd';
import axios from 'axios';
import InterviewShow from '../InterviewShow';
import EmptyList from '../EmptyList';
import Heading from '../Heading';
interface Interview {
    id: number;
    name: string;
    role: string;
    dateTime: string;
}

interface InterviewListProps {
    title: string;
    endpoint: string;
}

const InterviewList: React.FC<InterviewListProps> = ({ title, endpoint }) => {
    const [interviews, setInterviews] = useState<Interview[]>([]);

    useEffect(() => {
        axios.get<Interview[]>(`http://localhost:8080/interviews/${endpoint}`)
            .then(response => setInterviews(response.data))
            .catch(error => console.error('Error fetching interviews', error));
    }, [endpoint]);

    return (
        <div>
            <Heading heading={title}/>
            {interviews.length>0?interviews.map((item, index) => (
              <InterviewShow name={item.name} time={item.dateTime} role={item.role}/>
            )):(<EmptyList/>)}
        </div>
    );
};

export default InterviewList;
