import React from "react";
import * as s from "../app.styles";
import ErrorDetails from "./error-details";
import {useGithubIssueComments} from "../api/github-events.api";

type ResultsProps ={
  user:string;
  repo:string;
};

const getDifferenceInHours = (date: string) => {
  const diffInMs = Math.abs(new Date().getTime() - new Date(date).getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60));
}

const Results: React.FC<ResultsProps> = ({
  user, repo
}:ResultsProps) => {
  const { data, isLoading, isError, error } = useGithubIssueComments(user, repo);

  return(
    <>
      {
        isLoading && (<s.loader>Loading data...</s.loader>)
      }
      {
        isError && (<ErrorDetails error={error}/>)
      }

      {data?.map(issue => (
          <s.issue_container key={issue.id}>
              <s.issuer_title>{issue.title}</s.issuer_title>
              <s.issuer_info>By <strong>{issue.user.login}</strong> &bull; {getDifferenceInHours(issue.created_at)} hours ago</s.issuer_info>                
              <s.issuer_body>{issue.body}</s.issuer_body>
              <s.comments_header>{issue.comments?.length} Comments</s.comments_header>
              {issue.comments.map(comment =>
                  <s.comment_body key={comment.id}>
                      <div>By <strong>{comment.user.login}</strong> &bull; {getDifferenceInHours(comment.created_at)} hours ago</div>
                      <div>{comment.body}</div>
                  </s.comment_body>
              )}
          </s.issue_container>
      ))}
      
    </>
  );
}

export default Results;