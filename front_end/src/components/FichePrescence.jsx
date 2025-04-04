import '../styles/FichePresenceStyle.css'
import JourSemaine from "./JourSemaine";
export default function FichePrescence({ stgs, days,dates }) {
    return (
        <div className="fiche-container">
            <div className="info-container">
                <div className="info-stgs">
                    <div className="nums">
                        <h6 className="text-black title">N°</h6>
                        {stgs.map((stg, i) => <div key={i} className="num">{i + 1}</div>)}
                    </div>
                    <div className="noms">
                        <h6 className="text-black title">Nom et Prenom</h6>
                        {stgs.map((stg, i) => <div key={i} className="nom">{stg.fullName}</div>)}
                    </div>
                </div>
                <div className='em'><span>Emargements des Formateurs</span></div>
            </div>
            {
                days.map((d, i) => <JourSemaine key={i} day={d.fr} date={dates[i]} stgs={stgs} />)
            }
        </div>
    )
}