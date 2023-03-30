export const getImage = () =>
    fetch("http://localhost:8080/file")
      .then((res) => res.json());