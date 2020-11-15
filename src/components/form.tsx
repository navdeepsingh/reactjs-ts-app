import React, {useState} from "react";
import Button from "./ui/button";
import * as s from "../app.styles";
import Results from "./results";

type FormProps = {
  customHandle: Function;
};

const Form: React.FC<FormProps> = ({customHandle}: FormProps ) => 
{  

  //const [inputs, handleSubmit] = useFormSubmit();
  const [user, setUser] = useState('');
  const [repo, setRepo] = useState('');

 const handleSubmit = () => customHandle({user, repo});
  
  //console.log('Call to API ' + user+ ' ' + repo);
    //useGithubIssueComments(user, repo);
    //return;
  

  return (
    <>
      <s.form>
        
          <s.input 
            type="text"
            name="user"
            placeholder="user"
            onChange={(e) => setUser(e.target.value)}
            required
          />
        
        <div>&#47;</div>
        
          <s.input 
            type="text"
            name="repo"
            placeholder="repo"
            onChange={(e) => setRepo(e.target.value)}
            required
          />
        
        <Button 
          type="button"
          onClick={handleSubmit}
        >Go fetch</Button>      
      </s.form>
      
    </>
  )
};

export default Form;
