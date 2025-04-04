import { useState } from 'react';
import '../styles/loginStyle.css';
export default function Login() {
    const [matricule, setMatricule] = useState('');
    const [mdp, setMdp] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        //
    }
    return (
        <div className='login-body'>
            <div className="main-login ps-5 pe-5 pt-5  ">
                <h2 className="title mt-5 text-white fw-bolder">ISTA BERKANE</h2>
                <h6 className='text-white mb-5'>Gestion d'abscence</h6>
                <form className="login-form w-100" onSubmit={handleSubmit}>
                    <label className='lb-login'>
                        <span className='spanInp text-white'>Matricule</span><br />
                        <input className='inp form-control rounded-5 mt-1 mb-4'
                            type="text"
                            name="matricule"
                            placeholder='Tapez votre matricule'
                            onChange={(e) => setMatricule(e.target.value)}
                        />
                    </label><br />
                    <label className='lb-login'>
                        <span className='spanInp text-white mt-5'>Mot de passe</span><br />
                        <input className=' inp form-control  mt-1 rounded-5 mb-4'
                            type="password"
                            placeholder='Tapez votre mot de passe'
                            name="motDePasse"
                            onChange={(e) => setMdp(e.target.value)}
                        />
                    </label><br />
                    <input className="btn-submit p-2 mt-3 rounded-5 w-100" type="submit" value='Connexion' />
                </form>
            </div>
        </div>
    )
}