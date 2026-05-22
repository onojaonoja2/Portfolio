import React, { useEffect, useRef } from 'react';

const RiverAnimation = () => {
  const canvasRef = useRef(null);
  const stateRef = useRef({
    fish: [],
    time: 0,
    lastScrollY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const state = stateRef.current;
    let lastTime = 0;
    let animId;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.offsetWidth : window.innerWidth;
      canvas.height = parent ? parent.offsetHeight : 500;
    };
    resize();
    window.addEventListener('resize', resize);

    const createFish = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height * 0.25 + Math.random() * canvas.height * 0.55,
      size: 8 + Math.random() * 14,
      speed: 0.3 + Math.random() * 1.2,
      direction: Math.random() > 0.5 ? 1 : -1,
      hue: 190 + Math.random() * 70,
      sat: 60 + Math.random() * 30,
      light: 45 + Math.random() * 20,
      tailPhase: Math.random() * Math.PI * 2,
      bodyWave: Math.random() * Math.PI * 2,
      isJumping: false,
      jumpProgress: 0,
      jumpDuration: 1.2 + Math.random() * 1.8,
      jumpBaseY: 0,
      jumpStartX: 0,
      jumpHeight: 25 + Math.random() * 45,
      cooldownTimer: Math.random() * 5,
      jumpCooldown: 3 + Math.random() * 5,
    });

    state.fish = Array.from({ length: 18 }, createFish);

    const animate = (timestamp) => {
      const dt = lastTime ? Math.min((timestamp - lastTime) / 1000, 0.05) : 0.016;
      lastTime = timestamp;
      state.time += dt;

      const rawScroll = Math.abs(window.scrollY - state.lastScrollY);
      const scrollSpeed = Math.min(rawScroll / 80, 4);
      state.lastScrollY = window.scrollY;

      const speedFactor = 1 + scrollSpeed * 0.8;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.06)');
      gradient.addColorStop(0.4, 'rgba(99, 102, 241, 0.12)');
      gradient.addColorStop(0.7, 'rgba(79, 70, 229, 0.18)');
      gradient.addColorStop(1, 'rgba(67, 56, 202, 0.22)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.save();
      for (let w = 0; w < 5; w++) {
        ctx.beginPath();
        const alpha = 0.08 + w * 0.06;
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.lineWidth = 1.5 + w * 0.4;
        const amp = 5 + w * 4;
        const freq = 0.012 + w * 0.002;
        const waveOffset = state.time * (12 + scrollSpeed * 8);

        for (let x = 0; x <= canvas.width; x += 2) {
          const baseY = canvas.height * (0.1 + w * 0.18);
          const y = baseY
            + Math.sin(x * freq + waveOffset) * amp
            + Math.sin(x * freq * 0.6 + waveOffset * 0.7 + w) * amp * 0.5;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      state.fish.forEach((fish) => {
        fish.cooldownTimer -= dt * speedFactor;

        if (fish.cooldownTimer <= 0 && !fish.isJumping) {
          fish.isJumping = true;
          fish.jumpProgress = 0;
          fish.jumpBaseY = fish.y;
          fish.jumpStartX = fish.x;
          fish.cooldownTimer = fish.jumpCooldown + Math.random() * 3;
        }

        if (fish.isJumping) {
          fish.jumpProgress += dt / fish.jumpDuration * speedFactor;
          if (fish.jumpProgress >= 1) {
            fish.isJumping = false;
            fish.y = fish.jumpBaseY;
            fish.x = fish.jumpStartX + fish.direction * 30;
          } else {
            const arc = Math.sin(fish.jumpProgress * Math.PI);
            fish.y = fish.jumpBaseY - arc * fish.jumpHeight;
            fish.x = fish.jumpStartX + fish.jumpProgress * fish.direction * 50;
          }
        } else {
          fish.x += fish.speed * fish.direction * speedFactor;
          if (fish.x < -80) fish.x = canvas.width + 80;
          if (fish.x > canvas.width + 80) fish.x = -80;
        }

        fish.bodyWave += dt * (4 + scrollSpeed * 2);
        fish.tailPhase += dt * (6 + scrollSpeed * 3);

        ctx.save();
        ctx.translate(fish.x, fish.y);
        ctx.scale(fish.direction, 1);

        if (fish.isJumping) {
          ctx.save();
          ctx.globalAlpha = 0.15 * (1 - fish.jumpProgress);
          ctx.fillStyle = '#000';
          ctx.beginPath();
          ctx.ellipse(3, 6, fish.size * 0.5, 3, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          ctx.globalAlpha = 0.8 + 0.2 * Math.sin(fish.jumpProgress * Math.PI * 3);
        } else {
          ctx.globalAlpha = 0.65;
        }

        const hueShift = Math.sin(fish.bodyWave) * 8;
        const bodyColor = `hsl(${fish.hue + hueShift}, ${fish.sat}%, ${fish.isJumping ? fish.light + 15 : fish.light}%)`;

        // Body
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.ellipse(0, 0, fish.size, fish.size * 0.38, 0, 0, Math.PI * 2);
        ctx.fill();

        // Tail fin
        const tailWag = Math.sin(fish.tailPhase) * 5;
        ctx.fillStyle = bodyColor;
        ctx.beginPath();
        ctx.moveTo(-fish.size * 0.85, 0);
        ctx.lineTo(-fish.size - fish.size * 0.5, -7 + tailWag);
        ctx.lineTo(-fish.size - fish.size * 0.5, 7 + tailWag);
        ctx.closePath();
        ctx.fill();

        // Dorsal fin
        ctx.fillStyle = `hsl(${fish.hue + hueShift + 15}, ${fish.sat}%, ${fish.light - 5}%)`;
        ctx.beginPath();
        ctx.moveTo(-fish.size * 0.15, -fish.size * 0.38);
        ctx.lineTo(fish.size * 0.15, -fish.size * 0.65);
        ctx.lineTo(fish.size * 0.45, -fish.size * 0.38);
        ctx.closePath();
        ctx.fill();

        // Pectoral fin
        ctx.beginPath();
        ctx.moveTo(fish.size * 0.2, fish.size * 0.15);
        ctx.lineTo(0, fish.size * 0.45);
        ctx.lineTo(fish.size * 0.4, fish.size * 0.2);
        ctx.closePath();
        ctx.fill();

        // Eye
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(fish.size * 0.5, -fish.size * 0.12, fish.size * 0.18, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#1a1a2e';
        ctx.beginPath();
        ctx.arc(fish.size * 0.55, -fish.size * 0.12, fish.size * 0.09, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(fish.size * 0.6, -fish.size * 0.17, fish.size * 0.04, 0, Math.PI * 2);
        ctx.fill();

        // Mouth
        ctx.strokeStyle = `hsl(${fish.hue + hueShift}, ${fish.sat}%, ${fish.light - 10}%)`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(fish.size * 0.9, -1);
        ctx.quadraticCurveTo(fish.size, 0, fish.size * 0.9, 1);
        ctx.stroke();

        ctx.restore();
      });

      state.fish.forEach((fish) => {
        if (!fish.isJumping) return;
        const splashAlpha = 0.35 * Math.sin(fish.jumpProgress * Math.PI);
        ctx.save();
        ctx.globalAlpha = splashAlpha;
        ctx.strokeStyle = 'rgba(196, 181, 253, 0.7)';
        ctx.lineWidth = 1.2;
        const r = 4 + fish.jumpProgress * 22;
        ctx.beginPath();
        ctx.ellipse(fish.jumpStartX, fish.jumpBaseY, r, r * 0.35, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 0.8;
        const r2 = r * 0.6;
        ctx.beginPath();
        ctx.ellipse(fish.jumpStartX, fish.jumpBaseY, r2, r2 * 0.35, 0.2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      ctx.save();
      for (let x = 0; x < canvas.width; x += 25) {
        const shimmer = Math.sin(x * 0.04 + state.time * 0.8) * 0.4 + 0.6;
        const yBase = canvas.height * 0.35 + Math.sin(x * 0.015 + state.time * (0.3 + scrollSpeed * 0.2)) * 6;
        ctx.fillStyle = `rgba(255, 255, 255, ${shimmer * 0.07})`;
        ctx.fillRect(x, yBase, 10, 1.5);
      }
      ctx.restore();

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default RiverAnimation;
