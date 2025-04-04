import { useEffect, useState } from "react";
export default function TestApi(){
    const [msg, setMsg] = useState();
        useEffect(() => {
            fetch('http://127.0.0.1:8000/api/msg')
            .then((response) => response.json())
            .then((data) => setMsg(data.msg));
        }, []);
        return(
            <h1>{msg}</h1>
        )
}