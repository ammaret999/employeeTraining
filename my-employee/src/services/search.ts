export const getSearchEmployee = (key: string) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}/search?query=${key}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
  }).then((res) => res.json());