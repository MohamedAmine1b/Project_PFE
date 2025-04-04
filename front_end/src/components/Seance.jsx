import { useState } from 'react';
import '../styles/SeanceStyle.css'
import CheckAbs from "./CheckAbs";
export default function Seance({ date, stgs, heure, active }) {
    const [abs, setAbs] = useState([]);
    const [activeS, setActiveS] = useState(active);
    function handleChange(e, absStg) {
        const { checked } = e.target;
        setAbs((prevState) =>
            checked ?
                prevState.includes(absStg) ? prevState
                    : [...prevState, absStg]
                : prevState.filter((a) => a !== absStg)
        );
    }
    function handleValider(date, heure, abs) {
        console.log({
            date,
            heure,
            abs
        });
        setActiveS(false)
    }
    return (
        <div className={'seance '+ (activeS ? '' : 'desactive')}>
            {
                stgs.map((stg, i) => <div key={i} className={"sea-stg "}>
                    <CheckAbs active={activeS} handleChange={handleChange} idStg={stg.id} />
                </div>)
            }
            <div className="btn-container">
                <button onClick={() => handleValider(date, heure, abs)} disabled={!activeS} className={"btn-valider " + (active ? '' : 'desactive')}>V</button>
            </div>
        </div>
    )
}