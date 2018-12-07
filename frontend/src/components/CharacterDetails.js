import React, {useState, Component} from 'react';
import races from '../common/races';
import classes from '../common/classes';

// class CharacterDetails extends Component {
//     render() {
//         const {player} = this.props;
//         const race = races.find((race) => race.id === player.race);
//         const cls = classes.find((cls) => cls.id === player.cls);
//
//         return (
//             <div>
//                 <div className="row">
//                     <div className="col-2">
//                         <b>Name</b>
//                     </div>
//                     <div className="col-10">
//                         {player.name}
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-2">
//                         <b>Race</b>
//                     </div>
//                     <div className="col-10">
//                         {race.name}
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-2">
//                         <b>Class</b>
//                     </div>
//                     <div className="col-10">
//                         {cls.name}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const CharacterDetails = ({player}) => {

    // const [playerState, setPlayer] = useState(player);
    // const [raceState, setRace] = useState(player.race);
    // const [clsState, setCls] = useState(player.cls);

    return (
        <div>
            {console.log(JSON.stringify(player))}
            <div className="row">
                <div className="col-2">
                    <b>Name</b>
                </div>
                <div className="col-10">
                    {player.name}
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <b>Race</b>
                </div>
                <div className="col-10">
                    {player.race}
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <b>Class</b>
                </div>
                <div className="col-10">
                    {player.cls}
                </div>
            </div>
        </div>
    )
}

export default CharacterDetails;