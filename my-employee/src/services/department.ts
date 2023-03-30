export const getDepartment = () =>
    fetch("http://localhost:8080/admin/department")
      .then((res) => res.json());