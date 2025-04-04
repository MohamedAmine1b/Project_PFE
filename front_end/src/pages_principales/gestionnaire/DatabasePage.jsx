import { useState } from 'react';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import '../../styles/dataBaseStyle.css';
import { Home, CalendarX, Users, Database } from 'lucide-react';
export default function UpdateDatabase() {
    const [filesInp, setFilesInp] = useState({});
    function handleChange(e) {
        const { name, files } = e.target;
        setFilesInp({ ...filesInp, [name]: files[0] })
    }
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
                    active: false
                },
                {
                    title: 'Base de donnee',
                    icon: <Database className='icons' />,
                    active: true
                },
            ]} />
            <div className="main-db">
                <NavBar title='Database' user='Youssed dgh' />
                {/* body */}
                <div className="body ps-5 pe-5 pt-3">
                    {/* Conteneur de mise a jour*/}
                    <div className="container-update d-flex">
                        {/* formulaire de Mise a jour des donnee */}
                        <div className="update-db p-3 me-5  bg-white shadow">
                            <h5 className='update-title'>Mise a jour des données</h5>
                            <form className='p-2' encType="multipart/form-data">
                                <label className='lb-db w-100 d-flex justify-content-center flex-column align-items-center'>
                                    <img src="images/excel_file_icon.svg" alt="hey" width='30px' className='mt-4' />
                                    <p className='m-0 para'>{filesInp.db ? filesInp.db.name : 'cliquez pour télécharger ou faites glisser et déposez'}</p>
                                    <p className='para'>{filesInp.db ? 'cliquez pour changer le fichier' : '.XLS ou .XlSX fichiers uniquement'}</p>
                                    <input name='db'
                                        style={{ width: '0px' }}
                                        onChange={handleChange}
                                        type="file"
                                        accept=".xlsx, .xls"
                                    />
                                </label>
                                <button type='submit' className='p-2 btn-submit w-100 mt-2'>Mise a jour</button>
                            </form>
                        </div>
                        {/* Formulaire de mise a jour des seances */}
                        <div className="update-seance p-3 bg-white shadow ">
                            <h5 className='update-title'>Seance</h5>
                            <form className='1 p-2' encType="multipart/form-data">
                                <label className=' lb-db w-100 d-flex justify-content-center flex-column align-items-center'>
                                    <img src="images/excel_file_icon.svg" alt="hey" width='30px' className='mt-4' />
                                    <p className='m-0 para'>{filesInp.seance ? filesInp.seance.name : 'cliquez pour télécharger ou faites glisser et déposez'}</p>
                                    <p className='m-0 para'>{filesInp.seance ? 'cliquez pour changer le fichier' : '.XLS ou .XlSX fichiers uniquement'}</p>
                                    <input className='inpUpdate'
                                        style={{ width: '0px' }}
                                        onChange={handleChange}
                                        name='seance'
                                        type="file"
                                        accept=".xlsx, .xls"
                                    />
                                </label>
                                <button type='submit' className='p-2 btn-submit w-100 mt-2'>Ajouter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}