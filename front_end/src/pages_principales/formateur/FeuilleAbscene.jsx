import NavBar from '../../components/NavBar'
import SideBar from '../../components/SideBar'
import FichePrescence from '../../components/FichePrescence'
import '../../styles/FeuilleAbsStyle.css'
import { CalendarX, Home, Users } from 'lucide-react';
export default function FeuilleAbscene() {
    const lastUpdate = '2025-03-30';
    function getNextDate(date) {
        const startDate = new Date(date);
        let dates = [];
        for (let i = 1; i <= 6; i++) {
            let nextDay = new Date(startDate);
            nextDay.setDate(startDate.getDate() + i);
            dates.push(nextDay.toLocaleDateString('en-GB'));
        }
        return dates;
    }
    const dates = getNextDate(lastUpdate);
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
    const days = [
        { fr: "Lundi", en: "Monday" },
        { fr: "Mardi", en: "Tuesday" },
        { fr: "Mercredi", en: "Wednesday" },
        { fr: "Jeudi", en: "Thursday" },
        { fr: "Vendredi", en: "Friday" },
        { fr: "Samedi", en: "Saturday" }
    ];
    return (
        <div className='d-flex'>
            <SideBar items={[
                {
                    title: 'Accueil',
                    icon: <Home className='icons' />,
                    active: false
                },
                {
                    title: 'Liste d\'abscence',
                    icon: <CalendarX className='icons' />,
                    active: false
                },
                {
                    title: 'Liste des groupes',
                    icon: <Users className='icons' />,
                    active: true
                },
            ]} />
            <div className="main-feuille">
                <NavBar title='Liste des groupes' user='Nafissa Zerouki' />
                <div className="body ps-4 pe-4 pt-3 pb-4">
                    <div className="container-fueille p-2 me-2 bg-white shadow">
                        <div className="infos">
                            <div className="logo-titles mb-4 d-flex">
                                <div className="logo">
                                    <img src="./images/ofppt-logo.png" alt="" />
                                </div>
                                <div className="titles w-100 text-center">
                                    <h3 className='mt-2'>Feuille d’Abscence Hebdomadaire</h3>
                                    <h4 className='mt-4'>INSTITUT SPECIALISE DE TECHNOLOGIE APPLIQUEE BERKANE</h4>
                                </div>
                            </div>
                            <div className='groupe-inf d-flex mb-4 ps-5 pe-5'>
                                <div className="special me-auto">
                                    <div className='text-black'>Niveau: <span>TS</span></div>
                                    <div className='text-black'>Annee: <span>1</span></div>
                                    <div className='text-black'>Groupe: <span>DEV102</span></div>
                                </div>
                                <div className="general">
                                    <div className='mb-3 text-black'>Annee de formation: <span>2024/2025</span></div>
                                    <div className='text-black'>Semaine du <span>{dates[0]}</span> au <span>{dates[dates.length-1]}</span> </div>
                                </div>
                            </div>
                        </div>
                        <div className="fiche">
                            <FichePrescence stgs={stgs} days={days} lastUpdate={lastUpdate} dates={dates} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}