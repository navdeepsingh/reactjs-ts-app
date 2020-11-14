import React from 'react';
import * as s from "./app.styles";
import Form from "./components/form";
import Results from "./components/results";

function App() {
    return (  
        <>
            <s.GlobalStyle />
            <s.container>
                <s.header>GitHub Issues and Comments:</s.header>
                <Form />
                <Results />                
            </s.container>
        </>

    );
}

export default App;
