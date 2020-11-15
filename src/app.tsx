import React, {useState} from 'react';
import * as s from "./app.styles";
import Form from "./components/form";
import Results from "./components/results";

function App() {
    const [inputs, setInputs] = useState({user: 'microsoft', repo: 'Typescript'});
    console.log('App.js', inputs);
    
    return (  
        <>
            <s.GlobalStyle />
            <s.container>
                <s.header>GitHub Issues and Comments:</s.header>
                <Form customHandle={setInputs} />     
                <Results 
                    user={inputs.user}
                    repo={inputs.repo}
                />                        
            </s.container>
        </>

    );
}

export default App;
