// Unsplash API
const apiKey = "kRqNuscqu5JPeVRXAzjDggUt9kS_k23Ba6xY4ntC4Hk";
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from unsplash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
};


getPhotos();