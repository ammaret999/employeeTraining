export const getPosition = () =>
  fetch("http://localhost:8080/admin/position", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());