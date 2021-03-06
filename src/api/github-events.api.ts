import {GithubEvent, GithubComment, GithubIssue} from "./github-events.model";
import axios from "axios";
import {useQuery} from "react-query";

export function useGithubIssueComments( user: string, repo: string) {
   
    const url = `https://api.github.com/repos/${user}/${repo}/events?per_page=100`;

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
            comments: commentsData(output.payload.issue.id)            
        } as GithubIssue;
    };

    const modifyCommentsData = (output: GithubEvent):GithubComment => {
        return {            
            id: output.payload.comment.id,
            created_at: output.payload.comment.created_at,
            body: output.payload.comment.body,
            user: {
                id: output.payload.comment.user.id,
                login: output.payload.comment.user.login
            }               
        } as GithubComment;
    };


    const commentsData = (issueId: Number) => {
        let filteredData = [];
        filteredData = data.filter(issue => issue.payload.issue.id === issueId);
        return filteredData.map(modifyCommentsData);
    }

    results = data.map(modifyData);

    return (results);
}
