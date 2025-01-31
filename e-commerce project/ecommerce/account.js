function goBack() {
    if (document.referrer) {
        window.location.href = document.referrer; // Redirects to the previous page
    } else {
        window.history.back(); // Fallback: goes back if referrer is not available
    }
}
