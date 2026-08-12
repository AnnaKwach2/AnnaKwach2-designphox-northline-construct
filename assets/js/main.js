(() => {
  const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('.site-nav');
  if(toggle&&nav) toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const current=(location.pathname.split('/').pop()||'index').toLowerCase().replace(/\.html$/,'');
  document.querySelectorAll('.site-nav a').forEach(link=>{const href=(link.getAttribute('href')||'').split('#')[0].toLowerCase().replace(/\.html$/,'');if(href===current||(current.startsWith('service-')&&href==='services')||(current.startsWith('project-')&&href==='projects')){link.classList.add('active');link.setAttribute('aria-current','page')}});
  const items=document.querySelectorAll('.reveal');
  const revealStyles=['reveal-rise','reveal-left','reveal-right','reveal-scale','reveal-soft'];
  items.forEach((item,index)=>item.classList.add(revealStyles[index%revealStyles.length]));
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-count]').forEach(counter=>{
    const target=Number(counter.dataset.count||counter.textContent||0);
    if(reduceMotion||!('IntersectionObserver' in window)){counter.textContent=String(target);return}
    counter.textContent='0';
    const countObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)return;const start=performance.now(),duration=1800;const tick=now=>{const progress=Math.min((now-start)/duration,1);const eased=1-Math.pow(1-progress,3);counter.textContent=String(Math.round(target*eased));if(progress<1)requestAnimationFrame(tick)};requestAnimationFrame(tick);countObserver.unobserve(counter)}),{threshold:.55});
    countObserver.observe(counter);
  });
  if(!('IntersectionObserver' in window)){items.forEach(x=>x.classList.add('visible'));return}
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});items.forEach(x=>observer.observe(x));
  document.querySelectorAll('form[data-prototype-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const status=form.querySelector('[role=status]');if(form.checkValidity()){status.textContent='Thank you. Our project team will contact you within two business days.'}else{status.textContent='Please complete the required fields.'}}));
  if(!document.querySelector('.site-footer')&&!document.querySelector('.page-hero[style*="100vh"]')){
    document.body.insertAdjacentHTML('beforeend',`<footer class="footer site-footer"><div class="wrap footer-grid"><div class="footer-brand"><a class="brand brand-light" href="index.html"><span class="brand-mark">N/</span><span>NORTHLINE<small>CONSTRUCT</small></span></a><p>BUILDING WITH DISCIPLINE.<br>DELIVERING WITH CLARITY.</p><div class="socials"><a href="#" aria-label="LinkedIn">in</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a></div></div><div><h2>Explore</h2><a href="index.html">Home</a><a href="about.html">About</a><a href="projects.html">Projects</a><a href="insights.html">Insights</a></div><div><h2>Capabilities</h2><a href="service-general-contracting.html">General contracting</a><a href="service-design-build.html">Design + build</a><a href="services.html#preconstruction">Preconstruction</a><a href="services.html#civil">Civil works</a></div><div><h2>Start a conversation</h2><p>Riverside Drive, Westlands<br>Nairobi, Kenya</p><a href="tel:+254709246800">+254 709 246 800</a><a href="mailto:hello@northline.co.ke">hello@northline.co.ke</a><p>Mon–Fri · 8:00–17:00</p></div></div><div class="wrap demo-note">This website is a DesignPhox demonstration created to showcase modern website design for Kenyan construction companies.</div><div class="wrap footer-base"><span>COPYRIGHT © <span data-year>${new Date().getFullYear()}</span>. NORTHLINE CONSTRUCT. DESIGN BY <b>DesignPhox.</b></span><span>NAIROBI · KENYA</span></div><a class="footer-help" href="quote.html"><span>N/</span> HOW CAN WE HELP?</a></footer>`);
  }
  const capabilities=document.querySelector('.footer-grid>div:nth-child(3)');
  if(capabilities) capabilities.innerHTML='<h2>Capabilities</h2><a href="service-general-contracting.html">General contracting</a><a href="service-design-build.html">Design + build</a><a href="service-preconstruction.html">Preconstruction</a><a href="service-civil-works.html">Civil works</a><a href="service-fit-out.html">Fit-out</a><a href="service-refurbishment.html">Refurbishment</a>';
  document.querySelectorAll('.socials').forEach(group=>{group.innerHTML='<a class="social-facebook" href="#" aria-label="Facebook"><span aria-hidden="true">f</span></a><a class="social-instagram" href="#" aria-label="Instagram"><span aria-hidden="true"></span></a><a class="social-linkedin" href="#" aria-label="LinkedIn"><span aria-hidden="true">in</span></a><a class="social-x" href="#" aria-label="X"><span aria-hidden="true">X</span></a>'});
})();
