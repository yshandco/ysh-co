import React, { useEffect, useRef } from 'react';

export const AbstractCanvas = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const animFrameRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Subtle particles system
    const particleCount = 42;
    const particles = [];

    const resize = () => {
      width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.parentElement?.clientHeight || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-init particles if empty
      if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
            baseRadius: Math.random() > 0.85 ? 1.5 : 0.9,
            alpha: 0.12 + Math.random() * 0.18,
          });
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = -1000;
      mouseRef.current.targetY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Pause when out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    let time = 0;
    let travelLineX = 0;

    const render = () => {
      if (!isVisibleRef.current) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      time += prefersReducedMotion ? 0 : 0.006;
      travelLineX += prefersReducedMotion ? 0 : 0.45;
      if (travelLineX > width + 200) {
        travelLineX = -200;
      }

      // 1. Traveling delicate white filament line
      ctx.beginPath();
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';

      const lineSegments = 40;
      for (let i = 0; i <= lineSegments; i++) {
        const px = (width / lineSegments) * i;
        // Base sine wave
        const baseSine = Math.sin(time * 1.5 + i * 0.18) * 22;
        // Secondary harmonic
        const harmonic = Math.cos(time * 0.8 + i * 0.08) * 12;

        // Gravitational pull toward cursor
        let pull = 0;
        if (mx > -100) {
          const dist = Math.hypot(px - mx, (height * 0.52) - my);
          if (dist < 320) {
            pull = ((my - (height * 0.52)) * (1 - dist / 320)) * 0.35;
          }
        }

        const py = (height * 0.52) + baseSine + harmonic + pull;

        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      // Traveling highlight segment along the line
      const highlightWidth = 140;
      const startGrad = Math.max(0, travelLineX - highlightWidth);
      const endGrad = Math.min(width, travelLineX + highlightWidth);

      if (endGrad > startGrad) {
        const grad = ctx.createLinearGradient(startGrad, 0, endGrad, 0);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.45)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // 2. Geometric Nodes and Connection Network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Bounce off boundaries gently
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;

          // Mouse gravitational reaction (subtle push/pull)
          if (mx > -100) {
            const dx = p.x - mx;
            const dy = p.y - my;
            const dist = Math.hypot(dx, dy);
            if (dist < 140 && dist > 1) {
              const force = (140 - dist) / 140;
              p.x += (dx / dist) * force * 0.8;
              p.y += (dy / dist) * force * 0.8;
            }
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();

        // Connect nearby points
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 110) {
            const linkAlpha = (1 - d / 110) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${linkAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};

export default AbstractCanvas;
