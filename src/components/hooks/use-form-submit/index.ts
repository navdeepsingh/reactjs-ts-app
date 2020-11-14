import React, {useState} from "react";


export const useFormSubmit = (): [
  Object,
  () => void,
  () => void
] => {  
  const [inputs, setInputs] = useState({user: String, repo: String});

  const handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void = (
    event
  ) => {
    if (event) {
      event.preventDefault();
    }
    console.log('Call to API ' + inputs.user);
    //useGithubIssueComments(user, repo);
    return;
  }

  const handleInputChange: (e?: React.ChangeEvent<HTMLInputElement>) => void = (
    event
  ) => {
    if (event) {
      console.log(event);      
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return;    
  }

  return [inputs, handleInputChange, handleSubmit];
}