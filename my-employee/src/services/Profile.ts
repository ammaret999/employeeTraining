export const getUserById = () =>
  fetch("http://localhost:8080/employee/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());