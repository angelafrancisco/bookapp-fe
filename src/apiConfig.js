let apiUrl

const apiUrls = {
    development: "http://localhost:3001",
    production: "https://bookapp-backend-r263.onrender.com"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl;