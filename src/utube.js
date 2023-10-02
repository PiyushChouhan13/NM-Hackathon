// Replace 'YOUR_API_KEY' with your actual YouTube Data API Key
const apiKey = 'AIzaSyBGO1DtJAL7MX2YxnE0yUvfnE-lxP6AhBk';



// Function to fetch and display YouTube trending videos
function fetchTrendingVideos() {
    const container = document.getElementById('trending-videos');
    
    // Make a request to the YouTube Data API
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const videos = data.items;
            
            if (videos.length === 0) {
                container.innerHTML = 'No trending videos found.';
                return;
            }
            
            // Create HTML for each video player
            let html = '';
            videos.forEach(video => {
                const videoId = video.id;
                
                html += `
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
                    </div>
                `;
            });
            
            container.innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching trending videos:', error);
            container.innerHTML = 'Error fetching trending videos.';
        });
}

// Call the function to fetch and display trending videos when the page loads
window.onload = fetchTrendingVideos;
