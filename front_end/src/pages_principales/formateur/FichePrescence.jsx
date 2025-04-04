import { useState } from "react"
import CheckAbs from "../../components/CheckAbs";
import '../../styles/FichePresenceStyle.css'
export default function FichePrescence() {
    const [abs, setAbs] = useState([]);
    const [isSent, setIsSent] = useState(false);
    const stgs = [
        { id: 1, fullName: "Ahmed El Mansouri" },
        { id: 2, fullName: "Sara Ben Ali" },
        { id: 3, fullName: "Youssef El Fassi" },
        { id: 4, fullName: "Fatima Zahra Bakkali" },
        { id: 5, fullName: "Omar Redouani" },
        { id: 6, fullName: "Leila Bensalem" },
        { id: 7, fullName: "Rachid El Amrani" },
        { id: 8, fullName: "Khalid Chafik" },
        { id: 9, fullName: "Nadia Moulay" },
        { id: 10, fullName: "Samir Idrissi" },
        { id: 11, fullName: "Mounir Harrouni" },
        { id: 12, fullName: "Salma Bouziane" },
        { id: 13, fullName: "Karim Ait Lahcen" },
        { id: 14, fullName: "Amina El Yacoubi" },
        { id: 15, fullName: "Reda Boukhari" },
        { id: 16, fullName: "Hassan Belkacem" },
        { id: 17, fullName: "Zineb Cherkaoui" },
        { id: 18, fullName: "Bilal Haddadi" },
        { id: 19, fullName: "Imane Bousfiha" },
        { id: 20, fullName: "Mehdi Bennani" },
    ]
    const seances = [
        { id: 1, subject: "Mathematics", teacher: "Mr. Karim", time: "08:00 - 09:30", room: "A101" },
        { id: 2, subject: "Physics", teacher: "Ms. Nadia", time: "09:45 - 11:15", room: "B202" },
        { id: 3, subject: "English", teacher: "Mr. Ali", time: "11:30 - 13:00", room: "C103" },
        { id: 4, subject: "History", teacher: "Mrs. Amina", time: "14:00 - 15:30", room: "A104" },
        { id: 5, subject: "Computer Science", teacher: "Mr. Hassan", time: "15:45 - 17:15", room: "Lab 1" },
        { id: 6, subject: "French", teacher: "Ms. Sara", time: "08:00 - 09:30", room: "B201" },
        { id: 7, subject: "Chemistry", teacher: "Mr. Youssef", time: "09:45 - 11:15", room: "C204" },
        { id: 8, subject: "Philosophy", teacher: "Mrs. Rachida", time: "11:30 - 13:00", room: "A105" },
        { id: 9, subject: "Biology", teacher: "Dr. Mehdi", time: "14:00 - 15:30", room: "Lab 2" },
        { id: 10, subject: "Economics", teacher: "Mr. Reda", time: "15:45 - 17:15", room: "C101" },
        { id: 11, subject: "Geography", teacher: "Ms. Fatima", time: "08:00 - 09:30", room: "A106" },
        { id: 12, subject: "Art", teacher: "Mr. Amine", time: "09:45 - 11:15", room: "B102" },
        { id: 13, subject: "Music", teacher: "Ms. Houda", time: "11:30 - 13:00", room: "C201" },
        { id: 14, subject: "Physical Education", teacher: "Coach Omar", time: "14:00 - 15:30", room: "Gym" },
        { id: 15, subject: "Programming", teacher: "Mr. Yassine", time: "15:45 - 17:15", room: "Lab 3" },
        { id: 16, subject: "Robotics", teacher: "Dr. Azzedine", time: "08:00 - 09:30", room: "Lab 4" },
        { id: 17, subject: "Astronomy", teacher: "Ms. Salwa", time: "09:45 - 11:15", room: "C303" },
        { id: 18, subject: "Psychology", teacher: "Mrs. Ilham", time: "11:30 - 13:00", room: "B103" },
        { id: 19, subject: "Literature", teacher: "Mr. Anas", time: "14:00 - 15:30", room: "A107" },
        { id: 20, subject: "Ethics", teacher: "Mrs. Rania", time: "15:45 - 17:15", room: "B301" },
        { id: 21, subject: "Artificial Intelligence", teacher: "Dr. Samir", time: "08:00 - 09:30", room: "Lab 5" },
        { id: 22, subject: "Environmental Science", teacher: "Ms. Hajar", time: "09:45 - 11:15", room: "C401" },
        { id: 23, subject: "Sociology", teacher: "Mr. Tarik", time: "11:30 - 13:00", room: "B401" },
        { id: 24, subject: "Statistics", teacher: "Dr. Imad", time: "14:00 - 15:30", room: "A108" },
    ];
    function handleChange(e) {
        const idStg = e.target.getAttribute('stagiare');
        const { checked } = e.target;
        setAbs((prevState) =>
            checked ?
                prevState.includes(idStg) ? prevState
                    : [...prevState, idStg]
                : prevState.filter((a) => a !== idStg)
        );

    }
    function handleValider(e, seance, abs) {
        console.log({
            seance: seance,
            abscenses: abs
        });
        setIsSent(true)
    }
    return (
        <table className="fiche  mt-2 m-auto">
            <thead >
                <tr>
                    <th>N°</th>
                    <th>Nom&Prenom</th>
                    <th className="text-center" colSpan={4}>Lundi</th>
                    <th className="text-center" colSpan={4}>Mardi</th>
                    <th className="text-center" colSpan={4}>Mercredi</th>
                    <th className="text-center" colSpan={4}>Jeudi</th>
                    <th className="text-center" colSpan={4}>Vendredi</th>
                    <th className="text-center" colSpan={4}>Samedi</th>
                </tr>
            </thead>
            <tbody>
                {stgs.map((stg, i) => <tr key={i}>
                    <td className="text-center">{stg.id}</td>
                    <td className="text">{stg.fullName}</td>
                    {
                        seances.map((s, index) => <td className="p-1" key={index} >
                            <CheckAbs idStg={stg.id} seance={s.id} handleChange={handleChange} />
                        </td>)
                    }
                </tr>)}
                <tr>
                    <td className="text-em" colSpan={2}>Emargement des formateurs</td>
                    {
                        seances.map((s, i) => <td key={i}><button className="btn-valider" onClick={(e) => handleValider(e, s.id, abs)}>V</button></td>)
                    }
                </tr>
            </tbody>
        </table>
    )
}