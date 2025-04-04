import { useState } from 'react'
import '../styles/CheckAbsStyle.css'
export default function CheckAbs({ handleChange, idStg, active }) {
    const [isChecked, setIsChecked] = useState(false);
    function handleChecked(e) {
        if (active) {
            setIsChecked(!isChecked);
            handleChange(e, idStg);
        }
    }
    return (
        <label className="lb-ca">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChecked}
                stg={idStg}
            />
            <span className={"custom-checkmark" + (active ? ' active' : '')}></span>
        </label>
    );
}