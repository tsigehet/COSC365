// Simulate real-time reading
function fetchRealTimeData() {
    const realTimeData = document.getElementById('realTimeData');
    const currentTime = new Date().toLocaleTimeString();
    realTimeData.textContent = `The current time is ${currentTime}`;
}

// Update every second
setInterval(fetchRealTimeData, 1000);
