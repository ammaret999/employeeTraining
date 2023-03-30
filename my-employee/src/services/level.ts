export const getLevel = () =>
    fetch("http://localhost:8080/admin/level")
      .then((res) => res.json());