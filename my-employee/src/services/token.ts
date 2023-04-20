  export const getToken = () => 
      fetch(`http://localhost:8080/token`)
        .then((Response) => Response.json());
  