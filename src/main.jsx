import React,{useEffect,useMemo,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {site,roles,socials} from './data/site';
import {projects,experience,education,certifications,awards,skills,reviews} from './data/content';
import './styles.css';

const Icon=({children})=><span className="icon" aria-hidden="true">{children}</span>;
const Section=({id,kicker,title,children,sub})=><section id={id} className="section"><div className="section-head"><div><span className="kicker">{kicker}</span><h2>{title}</h2>{sub&&<p>{sub}</p>}</div></div>{children}</section>;

function Nav(){const [open,setOpen]=useState(false); const links=[['About','about'],['Experience','experience'],['Projects','projects'],['Skills','skills'],['Reviews','reviews'],['Education','education'],['Contact','contact']]; return <header className="nav"><a className="brand" href="#home" onClick={()=>setOpen(false)}><span className="brand-mark">AF</span><span><b>Arslan's Portfolio</b><small>Full Stack-MERN Developer</small></span></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">☰</button><nav className={open?'nav-links open':'nav-links'}>{links.map(([x,id])=><a key={id} href={'#'+id} onClick={()=>setOpen(false)}>{x}</a>)}<a className="nav-cta" href="#contact" onClick={()=>setOpen(false)}>Let’s talk ↗</a></nav></header>}

function Hero(){const [role,setRole]=useState(0);useEffect(()=>{const t=setInterval(()=>setRole(r=>(r+1)%roles.length),2600);return()=>clearInterval(t)},[]);return <section id="home" className="hero"><div className="hero-copy"><span className="eyebrow">CODE • DESIGN • INNOVATION</span><h1>I’m <em>ARSLAN FAYYAZ</em></h1><p className="lead"> A versatile Full Stack MERN Developer, Creative Developer and UI/UX Designer passionate about building modern digital experiences. I work across frontend and backend development, responsive UI/UX, APIs, databases, Git/GitHub, Generative AI and software solutions.</p><div className="role-line">Currently crafting as <span>{roles[role]}</span></div><div className="hero-actions"><a className="btn primary" href="#projects">Explore my work ↗</a><a className="btn ghost" href="/Arslan-Fayyaz-CV.pdf" download>Download CV ↓</a><a className="btn ghost" href="#contact">Contact me</a></div><div className="mini-stats"><div><b>15+</b><span>Projects</span></div><div><b>9</b><span>Experience</span></div><div><b>20+</b><span>Certificates</span></div></div></div><div className="scene" aria-label="Decorative 3D developer scene"><div className="orb orb-a"></div><div className="orb orb-b"></div><div className="ring ring-a"></div><div className="ring ring-b"></div><div className="cube"><div>React . Node.js</div><div>UI/UX</div><div>AI</div></div>><div className="float-card fc-one">✦ <b>Creative UI/UX</b><small>Design.Prototyping.Responsive UI</small></div><div className="float-card fc-two">⌘ <b>AI & Innovation</b><small>Generative AI . Automation . AI Tools</small></div></div></section>}

function About(){return <Section id="about" kicker="01 / About" title="A developer with a designer’s eye" sub="A balanced mix of engineering, visual thinking and hands-on learning."><div className="about-grid">
  <div className="portrait">
  <div className="portrait-glow"></div>
  <div className="portrait-placeholder">
    <img
      className="profile-photo"
      src="/profile.jpg"
      alt="Arslan Fayyaz"
    />
</div>
</div><div className="about-copy"><p>I specialize in building modern web applications, creating intuitive UI/UX designs, and developing AI-powered digital solutions. My skills span frontend and backend development, responsive web design, API integration, database management, Generative AI, and software development tools. I enjoy transforming ideas into practical, user-friendly, and visually engaging digital experiences while continuously learning and exploring emerging technologies.</p><div className="about-pills"><span>Problem Solver</span><span>UI/UX Mindset</span><span>Full Stack</span><span>AI Curious</span></div><div className="quote">“Good interfaces disappear into the experience — they just make the work feel easier.”</div><a className="text-link" href={site.voiceflow} target="_blank" rel="noreferrer">Meet my AI assistant ↗</a></div></div></Section>}

function Experience(){return <Section id="experience" kicker="02 / Experience" title="Experience that keeps evolving" sub="Internships, professional roles and hands-on work across design, development, sales and QA."><div className="timeline">{experience.map((e,i)=><article className="timeline-item" key={i}><div className="dot"></div><div className="time-card"><div className="time-top"><span>{e.dates}</span><b>{e.company}</b></div><h3>{e.role}</h3><small>{e.type} · {e.location}</small><p>{e.description}</p></div></article>)}</div></Section>}

function Projects(){return <Section id="projects" kicker="03 / Selected work" title="Projects with a purpose" sub="A showcase of frontend builds, UI/UX work, GenAI concepts and practical tools."><div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title}><div className="project-art"><span>0{i+1}</span><div className="project-orbit"></div><strong>{p.category}</strong></div><div className="project-body"><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>{p.github?<a className="text-link" href={p.github} target="_blank" rel="noreferrer">View on GitHub ↗</a>:<span className="muted">Project record</span>}</div></article>)}</div></Section>}

function Skills(){return <Section id="skills" kicker="04 / Toolkit" title="Tools I build with" sub="A practical stack spanning product design, frontend, full stack development and AI." ><div className="skill-cloud">{skills.map(([s,c])=><div className="skill" key={s}><span>{s}</span><small>{c}</small></div>)}</div></Section>}

function Reviews(){const [idx,setIdx]=useState(0);const timer=useRef();const start=()=>{clearInterval(timer.current);timer.current=setInterval(()=>setIdx(i=>(i+1)%reviews.length),5600)};useEffect(()=>{start();return()=>clearInterval(timer.current)},[]);const next=()=>{setIdx(i=>(i+1)%reviews.length);start()};const prev=()=>{setIdx(i=>(i-1+reviews.length)%reviews.length);start()};return <Section id="reviews" kicker="05 / Recognition" title="Recognition, in their own words" sub="Original screenshots from companies and professionals. The carousel moves automatically — you can also swipe or use the controls."><div className="review-wrap" onMouseEnter={()=>clearInterval(timer.current)} onMouseLeave={start}><button className="review-arrow left" onClick={prev}>←</button><div className="review-window"><div className="review-track" style={{transform:`translateX(-${idx*100}%)`}}>{reviews.map((r,i)=><article className="review-slide" key={r.company+i}><div className="review-image"><img src={r.image} alt={`${r.company} recognition for Arslan Fayyaz`} loading={i<2?'eager':'lazy'}/></div><div className="review-meta"><span>{r.label}</span><h3>{r.company}</h3><p>{r.text}</p></div></article>)}</div></div><button className="review-arrow right" onClick={next}>→</button><div className="review-dots">{reviews.map((r,i)=><button key={i} className={i===idx?'active':''} onClick={()=>{setIdx(i);start()}} aria-label={`Show review ${i+1}`}></button>)}</div></div></Section>}

function Education(){return <Section id="education" kicker="06 / Education" title="Education & credentials"><div className="two-col"><div className="stack">{education.map((e,i)=><article className="edu-card" key={i}><span>{e.dates}</span><h3>{e.degree}</h3><b>{e.institute}</b><small>{e.location} · {e.grade}</small></article>)}</div><div className="stack"><div className="panel"><h3>Certifications</h3><div className="cert-list">{certifications.map((c,i)=><div className="cert" key={i}><span>✓</span><div><b>{c[0]}</b><small>{c[1]} · {c[2]}</small></div></div>)}</div></div><div className="panel award"><span className="award-icon">✦</span><div><small>{awards[0].date}</small><h3>{awards[0].title}</h3><b>{awards[0].organization}</b><p>{awards[0].description}</p></div></div></div></div></Section>}

function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent('Portfolio inquiry — ' + f.get('name'));
    const body = encodeURIComponent(`Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section 
      id="contact" 
      kicker="07 / Contact" 
      title="Have an idea? Let’s build it." 
      sub="Use the form or reach out directly. The default form opens your email client; connect a form endpoint later if you want direct server-side delivery."
    >
      <div className="contact-grid">
        <div className="contact-card">
          <span className="eyebrow">START A CONVERSATION</span>
          <h3>Let’s turn a rough idea into something people can use.</h3>
          <p>Available for frontend development, UI/UX, portfolio websites, GenAI concepts and selected freelance work.</p>
          
          <div className="map-card">
            <div>
              <b>Based in</b>
              <span>Sukkur Town - Sector 2, Sukkur, Sindh, Pakistan</span>
            </div>
            <a className="map-btn" href={site.mapsUrl} target="_blank" rel="noreferrer">
              Open Google Maps ↗
            </a>
          </div>

          {/* Social Icons Container */}
          <div className="contact-links" style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '20px', flexWrap: 'wrap' }}>
            
            {/* Gmail */}
            <a href={`mailto:${site.email}`} title="Email" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/923103321891" target="_blank" rel="noreferrer" title="WhatsApp" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.012 2c-5.508 0-9.988 4.48-9.988 9.988 0 1.761.459 3.477 1.332 4.988l-1.416 5.176 5.301-1.391c1.454.793 3.096 1.215 4.771 1.215 5.508 0 9.988-4.48 9.988-9.988 0-5.508-4.48-9.988-9.988-9.988zm0 18.232c-1.503 0-2.983-.404-4.281-1.171l-.307-.183-3.181.834.848-3.1l-.201-.32c-.846-1.345-1.293-2.905-1.293-4.504 0-4.542 3.695-8.237 8.237-8.237 4.542 0 8.237 3.695 8.237 8.237 0 4.542-3.695 8.237-8.237 8.237z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://instagram.com/https://www.instagram.com/arsfamixm/" target="_blank" rel="noreferrer" title="Instagram" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/https://www.linkedin.com/in/arslan-fayyaz-3a4781214/" target="_blank" rel="noreferrer" title="LinkedIn" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="https://facebook.com/https://www.facebook.com/share/19n5s6Fsqq/" target="_blank" rel="noreferrer" title="Facebook" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>

          </div>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>Name<input name="name" required placeholder="Your name"/></label>
          <label>Email<input name="email" type="email" required placeholder="you@example.com"/></label>
          <label>Message<textarea name="message" required rows="6" placeholder="Tell me about your project..."></textarea></label>
          <button className="btn primary" type="submit">Send message ↗</button>
          {sent && <small className="form-note">Your email app should open with the message prepared.</small>}
        </form>
      </div>
    </Section>
  );
}
function Footer() {
  const footerSocials = [
    ["LinkedIn", "https://www.linkedin.com/in/arslan-fayyaz-3a4781214", "in"],
    ["Instagram", "https://www.instagram.com/arsfamixm/", "◎"],
    ["GitHub", "https://github.com/arslanfayyaz1997", "⌘"],
    ["Email", "mailto:arslanfayyaz1997@gmail.com", "✉"]
  ];

  return (
    <footer>
      <div>
        <b>Arslan's Portfolio</b>
        <span>Full Stack - MERN Developer</span>
      </div>

      <div className="footer-socials">
        {footerSocials.map(([name, url, icon]) => (
          <a
            key={name}
            href={url}
            target={url.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            title={name}
            aria-label={name}
          >
            {icon}
          </a>
        ))}
      </div>

      <small>© 2026 Arslan's Portfolio. Built with React + Vite.</small>
    </footer>
  );
}
function App(){return <><Nav/><main><Hero/><About/><Experience/><Projects/><Skills/><Reviews/><Education/><Contact/></main><Footer/><a
  className="whatsapp"
  href="https://wa.me/923103321891"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat on WhatsApp"
>
  <svg
    viewBox="0 0 32 32"
    width="30"
    height="30"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M16 2.5A13.4 13.4 0 0 0 4.5 22.8L2.7 29.3l6.7-1.7A13.5 13.5 0 1 0 16 2.5Zm0 24.4a11 11 0 0 1-5.6-1.5l-.4-.2-4 .9 1.1-3.9-.3-.4A10.9 10.9 0 1 1 16 26.9Zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.3c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.4Z"/>
  </svg>
</a></>}
createRoot(document.getElementById('root')).render(<App/>);
