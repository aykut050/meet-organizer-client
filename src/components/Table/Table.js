import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './Table.css';
import { useNavigate } from 'react-router-dom';

function Table() {
    const navigate = useNavigate();
    const [meet, setMeet] = useState([]);

    useEffect(() => {
        getMeets()
    },[]);

    const getMeets = async () => {
        axios.get('http://127.0.0.1:5000').then( (res) => {
            const response = JSON.parse(res.data) 
            setMeet(response)
        })
    }

    const editMeet = async (id) => {
        navigate('/edit-meet/'+id)
    }

    const deleteMeet = async (id) => {
        const meet = {
            id: id
        }

        await axios.post(`http://127.0.0.1:5000/delete-meet`, { meet })
            .then(response => {
                alert(response.data.message)
                getMeets()
            })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th className="text-center">Toplantı Konusu</th>
                    <th className="text-center">Tarih</th>
                    <th className="text-center">Başlangıç Tarihi</th>
                    <th className="text-center">Bitiş Tarihi</th>
                    <th className="text-center">Katılımcılar</th>
                    <th className="text-center">Aksiyonlar</th>
                </tr>
            </thead>
            <tbody>
                {
                    meet.map((element) => 
                        <tr key={element._id.$oid}>
                            <td className="text-center">{element.topic_of_meet}</td>
                            <td className="text-center">{element.date}</td>
                            <td className="text-center">{element.start_time}</td>
                            <td className="text-center">{element.finish_time}</td>
                            <td className="text-center">{element.participants}</td>
                            <td className="d-flex justify-content-center">
                                <button onClick={() => editMeet(element._id.$oid)} className="btn btn-info me-3">Düzenle</button>
                                <button onClick={() => deleteMeet(element._id.$oid)} className="btn btn-danger">Sil</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;
