import {GithubEvent, GithubIssue} from "./github-events.model";
import axios from "axios";
import {useQuery} from "react-query";


export function useGithubIssueComments( user: string, repo: string) {
   
    const url = `/networks/${user}/${repo}/events?per_page=100`;

    return useQuery<GithubIssue[], Error>(url, () =>
        axios.get(url).then((res) => mapResult(res.data))
    )
}

export function mapResult(data: GithubEvent[]): GithubIssue[] {
    let results: GithubIssue[];
    /**
     * a. Filter the input data to contain only events of type `IssueCommentEvent`
     */
    data = data.filter(result => result.type === 'IssueCommentEvent')
    //console.log(data);
    /**
     * @description b. & c. Transform the data into GithubIssue format
     * @param GithubEvent
     */
    const modifyData = (output: GithubEvent):GithubIssue => {
        return {
            id: output.payload.issue.id,
            created_at: output.payload.issue.created_at,
            title: output.payload.issue.title,
            body: output.payload.issue.body,
            user: {
                id: output.payload.issue.user.id,
                login: output.payload.issue.user.login,
            },
            comments: [
                {
                    id: output.payload.comment.id,
                    created_at: output.payload.comment.created_at,
                    body: output.payload.comment.body,
                    user: {
                        id: output.payload.comment.user.id,
                        login: output.payload.comment.user.login
                    }
                }                
            ]
        } as GithubIssue;
    };

    results = data.map(modifyData);

    console.log(results);
    return (results);
    
    // TODO:
    //   1. Remove the hardcoded data below
    //   2. Transform the GithubEvent[] data passed in as a parameter, to the expected GithubIssue[] return type
    //      Transformation guidelines:
    //      a. Filter the input data to contain only events of type `IssueCommentEvent`
    //      b. Transform the data from each GithubEvent to a GithubIssue as follows:
    //         GithubIssue.id = GithubEvent.payload.issue.id
    //         GithubIssue.created_at = GithubEvent.payload.issue.created_at
    //         GithubIssue.title = GithubEvent.payload.issue.title
    //         GithubIssue.body = GithubEvent.payload.issue.body
    //         GithubIssue.user.id = GithubEvent.payload.issue.user.id
    //         GithubIssue.user.login = GithubEvent.payload.issue.user.login
    //      d. Aggregate all the comments in the GithubEvent.payload.comment fields, into the GithubIssue.comments arrays, so
    //         that each GithubIssue contains an array of related comments.
    //         The mapping is as follows:
    //         GithubIssue.comments[n].id = GithubEvent.payload.comment.id
    //         GithubIssue.comments[n].created_at = GithubEvent.payload.comment.created_at
    //         GithubIssue.comments[n].body = GithubEvent.payload.comment.body
    //         GithubIssue.comments[n].user.id = GithubEvent.payload.comment.user.id
    //         GithubIssue.comments[n].user.login = GithubEvent.payload.comment.user.login
    //   5. Verify that all tests pass, by running `npm test`
    //   6. Once the tests pass, verify that the app runs in a browser by running `npm start`
    //      Note that the data will look different in the browser, as the browser will render live data from Github.
}
