export const getGender = () =>
    fetch("http://localhost:8080/admin/gender")
      .then((res) => res.json());