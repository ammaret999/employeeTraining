export const getImage = () =>
  fetch("http://localhost:8080/file", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());