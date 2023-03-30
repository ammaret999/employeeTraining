export const getUserById = () =>
    fetch("http://localhost:8080/employee/")
      .then((res) => res.json());