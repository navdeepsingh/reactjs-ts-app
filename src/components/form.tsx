import React, {useState} from "react";
import Button from "./ui/button";
import * as s from "../app.styles";

type FormProps = {
  customHandle: Function;
};

const Form: React.FC<FormProps> = ({customHandle}: FormProps ) => 
{  

  const [user, setUser] = useState<string>('microsoft');
  const [repo, setRepo] = useState<string>('Typescript');

  const handleSubmit = () => customHandle({user, repo});

  return (
    <>
      <s.form>        
        <s.input 
          type="text"
          name="user"
          placeholder="user"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value)}
          value={user}
          required
        />        
        <div>&#47;</div>        
        <s.input
          type="text"
          name="repo"
          placeholder="repo"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRepo(e.target.value)}
          value={repo}
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
