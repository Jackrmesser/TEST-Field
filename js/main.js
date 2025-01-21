//=============================================================================
// main.js
//=============================================================================

PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);

window.onload = function() {
    SceneManager.run(Scene_Boot);

    // Trigger fullscreen on first touch (mobile-specific)
    document.addEventListener('touchstart', function () {
        const canvas = document.getElementById('GameCanvas');
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen(); // For Safari
        } else if (canvas.msRequestFullscreen) {
            canvas.msRequestFullscreen(); // For older Edge/IE
        }
    }, { once: true }); // Ensure it runs only on the first interaction
};
