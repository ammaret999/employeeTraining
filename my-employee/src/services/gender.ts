export const getGender = () =>
  fetch("http://localhost:8080/admin/gender", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());