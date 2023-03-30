export const getPosition = () =>
    fetch("http://localhost:8080/admin/position")
      .then((res) => res.json());