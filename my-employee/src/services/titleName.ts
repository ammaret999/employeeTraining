export const getTitleName = () =>
  fetch("http://localhost:8080/admin/title", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());
      