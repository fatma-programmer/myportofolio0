import React, { useEffect, useRef } from 'react';
import './Projects.css';

const projectsData = [
  {
    icon: '🛒',
    thumbBg: 'linear-gradient(135deg,#020c1b,#041e35,#020f22)',
    radial: 'rgba(0,212,255,0.22)',
    tags: ['React', 'Redux', 'Firebase'],
    title: 'E-Commerce Platform',
    desc: 'Full-featured shopping app with cart, payments, and admin dashboard with real-time inventory.',
    pgrad: 'linear-gradient(135deg,rgba(0,212,255,0.1),rgba(0,150,200,0.07))',
    pglow: 'rgba(0,212,255,0.15)',
    liveUrl: '#', githubUrl: '#',
  },
  {
    icon: '💬',
    thumbBg: 'linear-gradient(135deg,#0d0221,#1a0533,#0a0118)',
    radial: 'rgba(123,47,255,0.28)',
    tags: ['Next.js', 'Socket.io', 'MongoDB'],
    title: 'Real-Time Chat App',
    desc: 'Instant messaging with rooms, typing indicators, media sharing and end-to-end encryption.',
    pgrad: 'linear-gradient(135deg,rgba(123,47,255,0.1),rgba(80,0,200,0.07))',
    pglow: 'rgba(123,47,255,0.15)',
    liveUrl: '#', githubUrl: '#',
  },
  {
    icon: '💬',
    thumbBg: 'linear-gradient(135deg,#0d0221,#1a0533,#0a0118)',
    radial: 'rgba(123,47,255,0.28)',
    tags: ['Next.js', 'Socket.io', 'MongoDB'],
    title: 'Real-Time Chat App',
    desc: 'Instant messaging with rooms, typing indicators, media sharing and end-to-end encryption.',
    pgrad: 'linear-gradient(135deg,rgba(123,47,255,0.1),rgba(80,0,200,0.07))',
    pglow: 'rgba(123,47,255,0.15)',
    liveUrl: '#', githubUrl: '#',
  },
  {
    icon: '📊',
    thumbBg: 'linear-gradient(135deg,#020f15,#041e18,#021510)',
    radial: 'rgba(0,255,179,0.22)',
    tags: ['React', 'D3.js', 'REST API'],
    title: 'Analytics Dashboard',
    desc: 'Interactive data visualization with live charts, custom filters and one-click PDF exports.',
    pgrad: 'linear-gradient(135deg,rgba(0,255,179,0.08),rgba(0,200,140,0.06))',
    pglow: 'rgba(0,255,179,0.12)',
    liveUrl: '#', githubUrl: '#',
  },
];

export default function Projects() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const idx = cardRefs.current.indexOf(e.target);
        setTimeout(() => e.target.classList.add('visible'), idx * 120);
        observer.unobserve(e.target);
      });
    }, { threshold: 0.12 });

    cardRefs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <div className="s-tag">what I built</div>
      <h2 className="s-title">Featured <span>Projects</span></h2>
      <div className="aline" />
      <p className="s-sub">Selected work — from concept to deployed product.</p>
      <div className="proj-grid">
        {projectsData.map((p, i) => (
          <div
            key={i}
            className="proj-card"
            ref={el => cardRefs.current[i] = el}
            style={{ '--pgrad': p.pgrad, '--pglow': p.pglow }}
          >
            <div className="proj-thumb">
              <div className="proj-thumb-bg" style={{ background: p.thumbBg }} />
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 50% 50%, ${p.radial}, transparent 65%)` }} />
              <div className="proj-thumb-icon">{p.icon}</div>
            </div>
            <div className="proj-body">
              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="ptag">{t}</span>)}
              </div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-footer">
                <div style={{ display: 'flex', gap: '1.2rem' }}>
                  <a href={p.liveUrl} className="proj-link">Live →</a>
                  <a href={p.githubUrl} className="proj-link">GitHub</a>
                </div>
                <div className="proj-arrow">↗</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
