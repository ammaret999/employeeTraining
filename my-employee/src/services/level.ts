export const getLevel = () =>
  fetch("http://localhost:8080/admin/level", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());