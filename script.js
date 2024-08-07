document.getElementById('confetti-button').addEventListener('click', function() {
    const helloText = document.getElementById('hello-text');
    helloText.style.display = 'block';
    startConfetti();
});

function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#FFC0CB', '#FFD700', '#ADFF2F', '#87CEEB', '#FF69B4'];
    const confetti = [];

    function createConfetti() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 5 + 2
        };
    }

    for (let i = 0; i < 300; i++) {
        confetti.push(createConfetti());
    }

    function drawConfetti() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((piece) => {
            context.beginPath();
            context.arc(piece.x, piece.y, piece.size, 0, Math.PI * 2);
            context.fillStyle = piece.color;
            context.fill();
            piece.y += piece.speed;
            if (piece.y > canvas.height) {
                piece.x = Math.random() * canvas.width;
                piece.y = -piece.size;
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}
