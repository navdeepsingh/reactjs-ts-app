import React from "react";
import Button from "./ui/button";
// import Input from "./ui/input";
import * as s from "../app.styles";
//import {useGithubIssueComments} from "../api/github-events.api";
import {useFormSubmit} from "./hooks/use-form-submit";
import {useGithubIssueComments} from "../api/github-events.api";
import ErrorDetails from "../components/error-details";

const Form: React.FC = () => 
{  

  const [inputs, handleInputChange, handleSubmit] = useFormSubmit();

  return (
    <>
      <s.form onSubmit={handleSubmit}>
        <div>
          <s.input 
            type="text"
            name="user"
            placeholder="user"
            onChange={handleInputChange}
            required
          />
        </div>
        <div>&#47;</div>
        <div>
          <s.input 
            type="text"
            name="repo"
            placeholder="repo"
            required
            onChange={handleInputChange}
          />
        </div>
        <Button 
          type="submit"
        >Go fetch</Button>
      </s.form>
    </>
  )
};

export default Form;
