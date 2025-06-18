const m={threshold:.1,rootMargin:"0px 0px -50px 0px"},u=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("visible"),t.target.classList.add("in-view"))})},m);function l(){const e=document.querySelector(".scroll-progress");if(e){const t=window.pageYOffset,o=document.body.offsetHeight-window.innerHeight,r=t/o*100;e.style.width=r+"%"}}function i(){const e=document.querySelector(".scroll-indicator"),t=document.querySelectorAll(".scroll-dot"),o=["inicio","personajes","tecnologia","descargar"];if(e&&t.length>0){window.pageYOffset>100?e.classList.add("visible"):e.classList.remove("visible");const r=o.find(s=>{const n=document.getElementById(s);if(n){const c=n.getBoundingClientRect();return c.top<=100&&c.bottom>=100}return!1});t.forEach((s,n)=>{s.classList.remove("active"),r===o[n]&&s.classList.add("active")})}}function d(){const e=document.querySelector(".hero-scroll-effect");e&&(window.pageYOffset>50?e.classList.add("scrolling"):e.classList.remove("scrolling"))}function a(e){const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}function p(){const e=document.querySelector(".scroll-down-hint");e&&e.addEventListener("click",()=>{const t=e.getAttribute("data-target");t&&a(t.replace("#",""))})}function g(){const e=document.querySelector(".tech-marquee-track");e&&e.querySelectorAll(".tech-marquee-item").forEach(o=>{const r=o.cloneNode(!0);e.appendChild(r)})}function h(){const e=document.querySelector(".testimonials-marquee-track");e&&e.querySelectorAll(".testimonial-card").forEach(o=>{const r=o.cloneNode(!0);e.appendChild(r)})}function y(){document.querySelectorAll(".code-line").forEach((t,o)=>{t.style.animationDelay=`${o*.2}s`})}function x(){document.querySelectorAll(".hover-lift").forEach(t=>{t.addEventListener("mouseenter",()=>{t.style.transform="translateY(-5px)",t.style.boxShadow="0 10px 25px rgba(78, 205, 196, 0.2)"}),t.addEventListener("mouseleave",()=>{t.style.transform="translateY(0)",t.style.boxShadow="none"})})}function b(){document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const r=t.getAttribute("href").replace("#","");a(r)})})}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".section-fade, .stagger-animation").forEach(o=>u.observe(o)),document.querySelectorAll(".scroll-dot").forEach((o,r)=>{o.addEventListener("click",()=>{a(["inicio","personajes","tecnologia","descargar"][r])})}),g(),h(),y(),x(),b(),p(),window.addEventListener("scroll",()=>{l(),i(),d()}),l(),i(),d()});const f=document.createElement("style");f.textContent=`
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes subtleMove {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-10px, -10px); }
      50% { transform: translate(10px, -5px); }
      75% { transform: translate(-5px, 10px); }
    }
    
    @keyframes float3D {
      0%, 100% { transform: rotateY(-5deg) rotateX(5deg) translateZ(20px) translateY(0px); }
      50% { transform: rotateY(-5deg) rotateX(5deg) translateZ(20px) translateY(-10px); }
    }
    
    @keyframes float3DMobile {
      0%, 100% { transform: rotateY(-3deg) rotateX(3deg) translateZ(10px) translateY(0px); }
      50% { transform: rotateY(-3deg) rotateX(3deg) translateZ(10px) translateY(-5px); }
    }
    
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes fadeInOut {
      0%, 100% { opacity: 0.7; }
      50% { opacity: 1; }
    }
    
    @keyframes bounceArrow {
      0%, 100% { transform: rotate(45deg) translateY(0); }
      50% { transform: rotate(45deg) translateY(-5px); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes pulseGlow {
      0%, 100% { box-shadow: 0 0 20px rgba(78, 205, 196, 0.6); }
      50% { box-shadow: 0 0 30px rgba(78, 205, 196, 0.8); }
    }
    
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    @keyframes neonPulseRed {
      0%, 100% { box-shadow: 0 0 10px rgba(255, 107, 107, 0.6), 0 0 20px rgba(255, 107, 107, 0.4); }
      50% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.8), 0 0 30px rgba(255, 107, 107, 0.6); }
    }

    @keyframes marqueeTestimonials {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  `;document.head.appendChild(f);
