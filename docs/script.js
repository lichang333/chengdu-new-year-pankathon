document.addEventListener('DOMContentLoaded', () => {
    // Set the date we're counting down to
    // Event Time: Dec 28, 2025 20:00:00
    const countDownDate = new Date("Dec 28, 2025 20:00:00").getTime();

    const countdownContainer = document.getElementById('countdown');

    // Update the count down every 1 second
    const x = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        if (distance < 0) {
            clearInterval(x);
            countdownContainer.innerHTML = '<div class="countdown-value">EVENT STARTED</div>';
        } else {
            countdownContainer.innerHTML = `
                <div class="countdown-unit">
                    <div class="countdown-value">${days}</div>
                    <div class="countdown-label">Days</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-value">${hours}</div>
                    <div class="countdown-label">Hours</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-value">${minutes}</div>
                    <div class="countdown-label">Minutes</div>
                </div>
                <div class="countdown-unit">
                    <div class="countdown-value">${seconds}</div>
                    <div class="countdown-label">Seconds</div>
                </div>
            `;
        }

    }, 1000);
});
