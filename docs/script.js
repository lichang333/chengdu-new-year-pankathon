document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    // Event Time: Dec 28, 2025 20:00:00
    const countDownDate = new Date("Dec 28, 2025 20:00:00").getTime();

    const countdownContainer = document.getElementById('countdown');
    if (!countdownContainer) return;

    // Initial Render of structure to avoid layout thrashing
    countdownContainer.innerHTML = `
        <div class="countdown-unit">
            <div class="countdown-value" id="cd-days">0</div>
            <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-unit">
            <div class="countdown-value" id="cd-hours">0</div>
            <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-unit">
            <div class="countdown-value" id="cd-minutes">0</div>
            <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-unit">
            <div class="countdown-value" id="cd-seconds">0</div>
            <div class="countdown-label">Seconds</div>
        </div>
    `;

    // Cache elements
    const elDays = document.getElementById('cd-days');
    const elHours = document.getElementById('cd-hours');
    const elMinutes = document.getElementById('cd-minutes');
    const elSeconds = document.getElementById('cd-seconds');

    let timerInterval;

    function updateCountdown() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(timerInterval);
            countdownContainer.innerHTML = '<div class="countdown-value">EVENT STARTED</div>';
            return;
        }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update elements
        if (elDays) elDays.textContent = days;
        if (elHours) elHours.textContent = hours;
        if (elMinutes) elMinutes.textContent = minutes;
        if (elSeconds) elSeconds.textContent = seconds;
    }

    // Run immediately to avoid 1s delay
    updateCountdown();

    // Update the count down every 1 second
    timerInterval = setInterval(updateCountdown, 1000);
});
