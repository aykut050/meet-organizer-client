import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

function AddMeet() {
    const navigate = useNavigate();
    const [meetTopic, setMeetTopic] = useState("");
    const [date, setDate] = useState("");
    const [startDate, setStartDate] = useState("")
    const [finishDate, setFinishDate] = useState("")
    const [participants, setParticipants] = useState("")

    const saveMeet = async () => {
        const meet = {
            topic_of_meet: meetTopic,
            date: date,
            start_time: startDate,
            finish_time: finishDate,
            participants: participants
        }
        await axios.post(`http://127.0.0.1:5000/add-meet`, { meet })
            .then(response => {
                alert(response.data.message)
                navigate('/')
            })
    }

    return (
        <div className='mt-3 m-auto w-75'>
            <div className="mb-3">
                <label className="form-label">Toplantı Konusu</label>
                <input type="text" className="form-control" onChange={(e) => {setMeetTopic(e.target.value)}} placeholder="İş Görüşmesi" />
            </div>
            <div className="mb-3">
                <label className="form-label">Tarih</label>
                <input type="text" className="form-control" onChange={(e) => {setDate(e.target.value)}} placeholder="02.07.2022" />
            </div>
            <div className="mb-3">
                <label className="form-label">Başlangıç Saati</label>
                <input type="text" className="form-control" onChange={(e) => {setStartDate(e.target.value)}} placeholder="12:00" />
            </div>
            <div className="mb-3">
                <label className="form-label">Bitiş Saati</label>
                <input type="text" className="form-control" onChange={(e) => {setFinishDate(e.target.value)}} placeholder="12:30" />
            </div>
            <div className="mb-3">
                <label className="form-label">Katılımcılar</label>
                <input type="text" className="form-control" onChange={(e) => {setParticipants(e.target.value)}} placeholder="Ahmet Yılmaz, Mehmet Öztürk" />
            </div>
            <div className="mb-3">
                <button onClick={saveMeet} className='btn btn-success'>Toplantı Ekle</button>
            </div>
        </div>
    );
}

export default AddMeet;
