import Seance from "./Seance";
import '../styles/JourSemaineStyle.css'
export default function JourSemaine({ day, date, stgs, seances }) {
    const [thisDay, month, year] = date.split('/');
    const currentDate = new Date().getDate();
    const seanceDate = new Date(year, month, thisDay).getDate();
    const currentHour = `${new Date().getHours()}:${new Date().getMinutes()}`;
    const seancesIntervals = ['08:30-10:50', '11:10-13:20', '13:30-15:50', '16:10-18:20'];
    function findCurrentSeance(currentHour) {
        const currentMinutes = parseInt(currentHour.split(':')[0]) * 60 + parseInt(currentHour.split(':')[1]);
        for (const interval of seancesIntervals) {
            const [start, end] = interval.split('-');

            const startMinutes = parseInt(start.split(':')[0]) * 60 + parseInt(start.split(':')[1]);
            const endMinutes = parseInt(end.split(':')[0]) * 60 + parseInt(end.split(':')[1]);

            if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
                return interval;
            }
        }
        return '';
    }

    return (
        <div className={"jour-seance "}>
            <div className="title-jour">
                <h6 className="day">{day}</h6>
                <span className="date text-center">{date}</span>
            </div>
            <div className='seances '>
                {
                    seancesIntervals.map((s, i) =>
                        <div key={i}
                            className="container-seance"><Seance heure={s}
                                active={currentDate === seanceDate && findCurrentSeance(currentHour) === s ? true : false}
                                date={date}
                                stgs={stgs}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}