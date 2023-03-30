export const getTitleName = () =>
    fetch("http://localhost:8080/admin/title")
      .then((res) => res.json());