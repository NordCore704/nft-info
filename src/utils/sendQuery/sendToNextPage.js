export const sendToNextPage = (router, url, data, id = 'NFT-INFO', summaryData = 'NFT-INFO') => {
  router.push({
    pathname: url,
    query: { data: JSON.stringify(data), id },
  });
};
