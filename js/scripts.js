const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

const setCanvasSize = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight / 2;
};

setCanvasSize();
window.addEventListener("resize", setCanvasSize);

let time = 0;
const waves = 50;

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < waves; i++) {
		ctx.beginPath();
		ctx.moveTo(0, canvas.height);

		for (let x = 0; x < canvas.width; x += 10) {
			const y =
				canvas.height -
				100 -
				Math.sin(x * 0.01 + time + i * 0.3) * 20 +
				(i * canvas.height) / waves;

			ctx.lineTo(x, y);
		}

		ctx.lineTo(canvas.width, canvas.height);
		ctx.closePath();

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		gradient.addColorStop(0, `rgba(132, 255, 99, ${0.1 - i * 0.002})`);
		gradient.addColorStop(1, `rgba(0, 255, 255, ${0.1 - i * 0.002})`);

		ctx.fillStyle = gradient;
		ctx.strokeStyle = gradient;
		ctx.lineWidth = 1;
		ctx.stroke();
		ctx.fill();
	}

	time += 0.005;
	requestAnimationFrame(animate);
};

animate();
