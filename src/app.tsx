import React from 'react';
import * as s from "./app.styles";
import {useGithubIssueComments} from "./api/github-events.api";
import ErrorDetails from "./components/error-details";
import Form from "./components/form";

function App() {
    // const { data, isLoading, isError, error } = useGithubIssueComments()

    // if(isLoading) {
    //     return (
    //         <div>Loading ...</div>
    //     )
    // }

    // if(isError) {
    //     return (
    //         <ErrorDetails error={error}/>
    //     )
    // }

    return (  
        <>
            <s.GlobalStyle />
            <s.container>
                <s.header>GitHub Issues and Comments:</s.header>
                <Form />
                {/* {data?.map(issue => (
                    <div key={issue.id}>
                        <s.issuer_title>{issue.title}</s.issuer_title>
                        <pre>{issue.body}</pre>
                        {issue.comments.map(comment =>
                            <s.comment_body key={comment.id}>
                                <div>{comment.created_at} {comment.user.login}:</div>
                                <pre>{comment.body}</pre>
                            </s.comment_body>
                        )}
                    </div>
                ))} */}
            </s.container>
        </>

    );
}

export default App;
