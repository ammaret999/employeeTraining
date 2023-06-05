export const getDepartment = () =>
  fetch("http://localhost:8080/admin/department", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());