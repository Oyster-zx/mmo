import React, {Component, useState} from 'react';
import Login from './components/Login';
import Game from './components/Game';
import pusher from './network/pusher';
import graphqlClient from './network/graphql';
import gql from 'graphql-tag';

const SIGN_IN_MUTATION = gql`mutation($sessionId: ID!, $name:String!, $race:String!, $class:String!) {
      signin(sessionId: $sessionId, name:$name, race:$race, class:$class)
    }
    `;

const App = () => {

    const [player, setPlayer] = useState();

    const EnterScreen = ({player}) => {
        let appContents;
        console.log(JSON.stringify(player));
        if (player) {
            appContents = <Game player={player}/>;
        } else {
            appContents = <Login handleLogin={onLogin}/>;
        }
        return appContents;
    };

    let onLogin = (name, race, cls) => {
        graphqlClient.mutate({
            mutation: SIGN_IN_MUTATION,
            variables: {
                sessionId: pusher.connection.socket_id,
                name: name,
                race: race,
                class: cls
            }
        }).then(() => {
            setPlayer({
                name,
                race,
                cls
            });
        });
    };

    return (
        <div className="App container-fluid">
            <EnterScreen player={player}/>
        </div>
    );
}

export default App;