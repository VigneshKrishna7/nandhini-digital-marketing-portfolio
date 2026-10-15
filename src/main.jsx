import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Check, ChevronDown,
  Instagram, Mail, MapPin, Menu, MousePointer2, Search, Send, Sparkles,
  Target, TrendingUp, Video, X, Megaphone, Globe, ChartNoAxesCombined
} from 'lucide-react';
import './styles.css';

const services = [
  { icon: Target, number: '01', title: 'Meta Ads & Lead Generation', text: 'Campaign planning, audience targeting, budget management, and ongoing optimization focused on meaningful leads.' },
  { icon: Instagram, number: '02', title: 'Social Media Marketing', text: 'Content planning and platform management that build brand awareness and encourage audience engagement.' },
  { icon: Search, number: '03', title: 'SEO & Google Ads', text: 'Keyword research, on-page and technical SEO, paid search, and performance tracking.' },
  { icon: Video, number: '04', title: 'Content & Creatives', text: 'Promotional reels, videos, and social creatives shaped around the campaign and its audience.' },
];
const projects = [
  { type: 'PAID SOCIAL · AUTOMOTIVE', title: 'Lead generation for premium pre-owned vehicles', desc: 'Meta Ads campaigns designed to connect vehicle listings with relevant audiences and support sales enquiries.', tag: '100+ qualified leads / month', className: 'automotive', icon: Target },
  { type: 'PAID SEARCH · REAL ESTATE', title: 'Search visibility for property marketing', desc: 'Google Ads keyword research and performance tracking, supported by SEO improvements for property-focused campaigns.', tag: 'Google Ads + SEO', className: 'realestate', icon: Search },
  { type: 'SOCIAL · CONTENT', title: 'Social content that keeps brands visible', desc: 'Promotional reels, videos, and social media creatives planned to improve brand awareness and audience engagement.', tag: 'Content & engagement', className: 'social', icon: Megaphone },
];
const skills = ['Meta Ads Manager', 'Facebook & Instagram Ads', 'Lead Generation', 'Audience Targeting', 'Google Ads', 'SEO', 'Content Creation', 'Video Editing', 'Web Design', 'Campaign Reporting'];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const nav = [['About', '#about'], ['Services', '#services'], ['Work', '#work'], ['Experience', '#experience']];
  const closeMenu = () => setMenuOpen(false);
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:nandskrishh@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return <>
    <header className="header">
      <a className="brand" href="#home" aria-label="Nandhini home"><span className="brand-mark">N.</span><span>NANDHINI<span className="brand-dot">.</span></span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> DIGITAL MARKETING SPECIALIST</div>
          <h1>Good strategy.<br/> <span>Better growth.</span></h1>
          <p className="hero-lede">I help brands reach the right people through thoughtful campaigns, compelling content, and data-led digital marketing.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore my work <ArrowRight size={17}/></a><a className="text-link" href="#about">More about me <ArrowDownRight size={17}/></a></div>
          <div className="hero-footnote"><span className="availability-dot"/> Open to meaningful marketing projects <span className="foot-separator">·</span> Bengaluru, India</div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid"/>
          <div className="photo-frame"><img src="/resume-img-000.jpg" alt="Nandhini, digital marketing specialist"/><div className="photo-caption"><span className="caption-mark"><Sparkles size={16}/></span><span><strong>Creative thinking</strong><small>Measurable marketing</small></span></div></div>
          <div className="float-card leads-card"><div className="float-card-label"><span className="mini-icon"><TrendingUp size={15}/></span> LEAD GENERATION</div><div className="metric">100<span>+</span></div><p>qualified leads monthly</p><div className="mini-bars" aria-hidden="true">{[26,39,31,51,45,65,58,82,70,94].map((v,i)=><i key={i} style={{height:`${v}%`}}/>)}</div></div>
          <div className="float-card strategy-card"><span className="strategy-icon"><ChartNoAxesCombined size={19}/></span><div><strong>Strategy first.</strong><small>Optimize continuously.</small></div></div>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <span className="visual-index">01 / 04</span>
        </div>
      </section>

      <section className="proof-strip"><div className="proof-inner"><span className="proof-title">AREAS I WORK IN</span><span><Target/> Paid campaigns</span><span><Instagram/> Social media</span><span><Search/> Search & SEO</span><span><BarChart3/> Performance insights</span></div></section>

      <section className="section section-about" id="about"><div className="section-label">01 — A LITTLE ABOUT ME</div><div className="about-grid"><h2>Marketing should look good.<br/><span>And work hard.</span></h2><div className="about-copy"><p>I’m Nandhini, a digital marketing specialist experienced in paid advertising, social media marketing, and search optimization. I enjoy bringing creative ideas and performance data together to help businesses connect with the right audience.</p><p>From campaign setup and audience research to creative production and performance analysis, I focus on making each part of the marketing process work toward a clear goal.</p><a className="inline-link" href="#contact">Let’s build something effective <ArrowUpRight size={16}/></a></div></div><div className="stats-row"><div className="stat"><strong>100<span>+</span></strong><span>Qualified leads per month*</span></div><div className="stat"><strong>3<span>+</span></strong><span>Digital marketing roles*</span></div><div className="stat"><strong>360°</strong><span>Creative + performance mindset</span></div><p className="stat-note">*Experience highlights based on the resume. Results vary by campaign.</p></div></section>

      <section className="section services-section" id="services"><div className="section-heading"><div><div className="section-label">02 — WHAT I DO</div><h2>Skills that move<br/><span>brands forward.</span></h2></div><p>From the first impression to the final conversion, I bring the right mix of creative execution and campaign optimization.</p></div><div className="service-grid">{services.map(({icon:Icon,number,title,text})=><article className="service-card" key={number}><div className="service-top"><span className="service-icon"><Icon size={21}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Ask about ${title}`}><ArrowUpRight size={19}/></a></article>)}</div></section>

      <section className="section work-section" id="work"><div className="work-heading"><div><div className="section-label">03 — SELECTED EXPERIENCE</div><h2>Work with a<br/><span>clear purpose.</span></h2></div><p>Examples of the campaign types and marketing activities I’ve worked on. Ask me about the approach, creative, and learnings behind each.</p></div><div className="project-grid">{projects.map(({type,title,desc,tag,className,icon:Icon},i)=><article className="project-card" key={title}><div className={`project-art ${className}`}><div className="art-top"><span>CAMPAIGN / 0{i+1}</span><ArrowUpRight size={18}/></div><div className="art-graphic"><div className="art-ring ring-a"/><div className="art-ring ring-b"/><div className="art-center"><Icon size={30}/></div><div className="art-pill">{i===0?'AUDIENCE → LEADS':i===1?'SEARCH → DISCOVERY':'IDEA → ENGAGEMENT'}</div></div><div className="art-bottom"><span>{i===0?'AUTOMOTIVE':i===1?'REAL ESTATE':'SOCIAL CONTENT'}</span><span>NDH / 2025</span></div></div><div className="project-content"><div className="project-type">{type}</div><h3>{title}</h3><p>{desc}</p><div className="project-tag"><Check size={14}/>{tag}</div></div></article>)}</div><p className="work-disclaimer">Campaign visuals on this portfolio are illustrative. Request actual work samples and available campaign data for a detailed review.</p></section>

      <section className="section experience-section" id="experience"><div className="section-label">04 — EXPERIENCE & LEARNING</div><div className="experience-grid"><div><h2>Curious by nature.<br/><span>Focused on results.</span></h2><p className="experience-intro">Building on hands-on experience across paid campaigns, search, and social content.</p><div className="skill-cloud">{skills.map(s=><span key={s}>{s}</span>)}</div><div className="cert-block"><h3>Certifications</h3><div className="cert-list"><span>Google Ads</span><span>HubSpot</span><span>Content Marketing</span><span>Facebook Ads</span><span>Google My Business</span></div></div></div><div className="timeline"><article className="timeline-item current"><span className="timeline-dot"/><div className="timeline-date">FEB 2025 — PRESENT</div><h3>Digital Marketing Specialist</h3><div className="timeline-company">Kamath Ventures</div><p>Manage Meta campaigns for lead generation and vehicle sales, create promotional content, and optimize audience targeting and performance.</p></article><article className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">MAR 2024 — OCT 2024</div><h3>Digital Marketing Executive</h3><div className="timeline-company">Bangalore Astate Properties</div><p>Managed Meta Ads, handled Google Ads keyword research and tracking, and implemented on-page and technical SEO improvements.</p></article><article className="timeline-item"><span className="timeline-dot"/><div className="timeline-date">JAN 2024 — FEB 2024</div><h3>Digital Marketing Intern</h3><div className="timeline-company">Bangalore Astate Properties</div><p>Supported Meta Ads management, keyword research, SEO audits, and website optimization.</p></article><div className="education"><h3>Education</h3><p><strong>Digital Marketing Certification</strong><span>IPCS Global Academy · 2023</span></p><p><strong>Master of English</strong><span>Shri Shakthikailash Women’s College · 2021–2023</span></p><p><strong>Bachelor of English</strong><span>Vivekananda College · 2018–2021</span></p></div></div></div></section>

      <section className="contact-section" id="contact"><div className="contact-orb orb-one"/><div className="contact-orb orb-two"/><div className="contact-inner"><div className="section-label light-label">05 — LET’S CONNECT</div><h2>Have a goal in mind?<br/><span>Let’s make it happen.</span></h2><p>Tell me a little about your brand, campaign, or next big idea. Let’s explore how digital marketing can help.</p><div className="contact-details"><a href="mailto:nandskrishh@gmail.com"><Mail size={17}/> nandskrishh@gmail.com</a><span><MapPin size={17}/> Bengaluru, India</span><a href="tel:+916382982288"><Send size={16}/> +91 63829 82288</a></div><form className="contact-form" onSubmit={submit}><div className="form-row"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label></div><label>What would you like to work on?<textarea required rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Tell me about your goals..."/></label><button className="button button-lime" type="submit">Send an enquiry <ArrowUpRight size={17}/></button>{sent&&<span className="form-note">Your email app should open with the enquiry drafted.</span>}</form></div></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">N.</span><span>NANDHINI<span className="brand-dot">.</span></span></a><span>Digital marketing with intention.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Nandhini</span></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
