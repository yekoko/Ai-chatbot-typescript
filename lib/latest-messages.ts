export const fetchLatestMessages = async () => {
  try {
    const response = await fetch("/api/messages");
    const respData = await response.json();
    return respData.data.data.reverse();
  } catch (error) {
    console.error(`Fetch latest messages errors ${error}`);
  }
};
