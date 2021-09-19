import React, { useEffect, useState } from "react";
const date = new Date();

export default function Index() {
    const [dateTime, setDateTime] = useState({
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
    });
    
    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            setDateTime({
                date: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            });
        }, 10);
        return () => clearInterval(timer);
    }, []);

    const [show, setShow] = useState(false);
    const [user, setUser] = useState("");
    const [nim, setNim] = useState("");
    
    useEffect(() => {
        if (user === "welcome") {
            alert(user)
        }
    }, [user]);

    useEffect(() => {
        alert("Selamat Datang")
    }, [])

    return (
        <div className="masuk">
            <div className="container">
                {show && (
                    <>
                    <div className="titleWrapper">
                        <p className="title">Masukkan Nama dan NIM</p>
                        <p style={{ color:"white"}}>----------</p>
                    </div>
                    <div className="inputWrapper">
                        <div>
                            <input
                                placeholder="Nama"
                                size="50"
                                value={user} 
                                onChange={(event) => setUser(event.target.value)} 
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        if(user !== "") {
                                            alert("Hallo " + user);
                                        }
                                    }
                                }} 
                            />
                        </div>
                        <div>
                            <input
                                placeholder="NIM"
                                size="50"
                                value={nim}
                                onChange={(event) => setNim(event.target.value)} 
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        if(nim !== ""){
                                            alert("Hallo " + user + " " + nim);
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </>
                )}
                <button className="Button" onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
            </div>
            <div className="tanggal">
                {dateTime.date}/{dateTime.month}/{dateTime.year}
            </div>
        </div>
    );
}