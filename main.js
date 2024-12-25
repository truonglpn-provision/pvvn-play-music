// Function to search YouTube videos
function searchYouTube() {
    const query = document.getElementById('search-query').value;
  
    if (!query) {
      alert('Please enter a search keyword!');
      return;
    }
  
    const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    window.open(youtubeSearchUrl, '_blank');
  }

  // Function to save video to Local Storage
  function saveVideo(title, url) {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
    savedVideos.push({ title, url });
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
    alert('Video saved successfully!');
    displaySavedVideos();
  }

  // Function to display saved videos from Local Storage
  function displaySavedVideos() {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
    const savedVideoList = document.getElementById('saved-video-list');
    savedVideoList.innerHTML = '';

    savedVideos.forEach((video, index) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        ${video.title} - <a href="${video.url}" target="_blank">Watch</a>
        <button onclick="deleteVideo(${index})">Delete</button>
      `;
      savedVideoList.appendChild(listItem);
    });
  }

  // Function to delete a video from Local Storage
  function deleteVideo(index) {
    const savedVideos = JSON.parse(localStorage.getItem('savedVideos')) || [];
    savedVideos.splice(index, 1);
    localStorage.setItem('savedVideos', JSON.stringify(savedVideos));
    displaySavedVideos();
  }

  // Display saved videos on page load
  window.onload = displaySavedVideos;