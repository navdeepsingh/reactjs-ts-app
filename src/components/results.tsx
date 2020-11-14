import React from "react";
import * as s from "../app.styles";
import ErrorDetails from "./error-details";
import {useGithubIssueComments} from "../api/github-events.api";

type ResultsProps = {
  inputs: Object;
};

const Results: React.FC<ResultsProps> = ({
  inputs
}) => {
  const { data, isLoading, isError, error } = useGithubIssueComments(inputs)

  return(
    <>
      {
        isLoading && (<s.loader>Loading data...</s.loader>)
      }
      {
        isError && (<ErrorDetails error={error}/>)
      }
      <s.results_wrapper>
        {data?.map(issue => (
            <div key={issue.id}>
                <s.issuer_title>{issue.title}</s.issuer_title>
                <s.issuer_info>By {issue.user} &bull; {issue.created_at}</s.issuer_info>
                <pre>{issue.body}</pre>
                {issue.comments.map(comment =>
                    <s.comment_body key={comment.id}>
                        <div>{comment.created_at} {comment.user.login}:</div>
                        <pre>{comment.body}</pre>
                    </s.comment_body>
                )}
            </div>
        ))}
      </s.results_wrapper>      
    </>
  );
}

export default Results;