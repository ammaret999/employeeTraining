export const getToken = () => {
  fetch(`https://accounts.google.com/o/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("tokenHeader")}`,
    },
    body: JSON.stringify({
      grant_type: `authorization_code`,
      code: `4/0AbUR2VMkKDU06vg1rHBIFM9u5aRjrERf6m9M0LmHY62pKPD9SxhEE64DmCP2KyJS7cbyJA`,
      client_id: `706911901274-4riu2c8i4010kv7jdnvuld8qoapds7h1.apps.googleusercontent.com`,
      client_secret: `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`,
      redirect_uri: `http://localhost:3000`,
    }),
  }).then((res) => console.log(res));
};
