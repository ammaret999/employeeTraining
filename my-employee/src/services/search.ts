export const getSearchEmployee = (key: string) => 
    fetch(`${process.env.REACT_APP_BACKEND_URL}/search?query=${key}`)
      .then((res) => res.json());