document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.getElementById('backButton')
  backButton.addEventListener('click', () => {
    window.electronAPI.navigateTo('home.html')
  })
}) 