export const sendToNextPage = (router, url, data, id) => {
  router.push({
    pathname: url,
    query: { data: JSON.stringify(data), id },
  });
};
