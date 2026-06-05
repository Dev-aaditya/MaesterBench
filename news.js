// news.js

// 1. Define the HTML template for a single news card
function createNewsCard(article, isFeatured) {
    const featuredClass = isFeatured ? 'featured' : '';

    // Determine the tag color based on the category
    let tagClass = 'tag-update';
    if (article.category === 'Model Release') tagClass = 'tag-release';
    if (article.category === 'Industry Data') tagClass = 'tag-industry';

    return `
        <article class="news-card ${featuredClass}">
            <div>
                <span class="news-tag ${tagClass}">${article.category}</span>
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
            </div>
            <div class="news-meta">
                <span>Source: ${article.source}</span>
                <span>${article.time}</span>
            </div>
        </article>
    `;
}

// 2. The automated pipeline function
async function loadNewsPipeline() {
    const newsGrid = document.getElementById('newsGrid');
    newsGrid.innerHTML = '<p style="color: #888; text-align: center; grid-column: 1/-1;">Fetching latest AI intelligence...</p>';

    // PASTE YOUR GNEWS API KEY HERE
    const API_KEY = GNEWS_API_KEY;

    // We are searching for "Artificial Intelligence" OR "LLM" OR "OpenAI"
    const query = '("Artificial Intelligence" OR "LLM" OR "OpenAI" OR "Anthropic")';
    const url = `https://gnews.io/api/v4/search?q=${encodeURIComponent(query)}&lang=en&max=5&apikey=${API_KEY}`;

    try {
        // Fetch the live data from the internet
        const response = await fetch(url);
        const data = await response.json();

        // Check if the API threw an error (like an invalid key)
        if (data.errors) {
            throw new Error(data.errors[0]);
        }

        // Clear the loading text
        newsGrid.innerHTML = '';

        // Loop through the live articles
        data.articles.forEach((article, index) => {
            // Make the first article the large "Featured" card
            const isFeatured = index === 0;

            // Format the raw API data to match our HTML structure
            const formattedArticle = {
                title: article.title,
                summary: article.description,
                category: "Live Update", // GNews doesn't categorize AI specifically, so we use a generic tag
                source: article.source.name,
                // Convert their ugly timestamp into a readable format
                time: new Date(article.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
            };

            // Create the HTML and inject it
            const cardHTML = createNewsCard(formattedArticle, isFeatured);
            newsGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

    } catch (error) {
        console.error("Pipeline Error:", error);
        newsGrid.innerHTML = '<p style="color: #ef4444; text-align: center; grid-column: 1/-1;">Failed to establish connection to intelligence feeds. Check console for details.</p>';
    }
}

// 5. Run the pipeline automatically when the page loads
document.addEventListener('DOMContentLoaded', loadNewsPipeline);