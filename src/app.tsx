import React from 'react';
import * as s from "./app.styles";
import Form from "./components/form";

function App() {
    return (  
        <>
            <s.GlobalStyle />
            <s.container>
                <s.header>GitHub Issues and Comments:</s.header>
                <Form />                             
            </s.container>
        </>

    );
}

export default App;
