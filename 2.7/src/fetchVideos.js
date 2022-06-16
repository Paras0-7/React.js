var obj = [];

async function fetchVideos(searchQuery) {
  const apiKey = "AIzaSyAttdfafiPRb75P4MMpqyF7OxLnaAs9iw8";
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&maxResults=15&q=${searchQuery}`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  obj = data.items;
  return obj;
}
