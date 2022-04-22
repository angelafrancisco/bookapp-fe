let apiUrl

const apiUrls = {
    development: "http://localhost:3001",
    production: "https://readme-bookapp-be.herokuapp.com"
}

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development
} else {
    apiUrl = apiUrls.production
}

export default apiUrl;