const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

(() => {
  const navNodes = document.querySelectorAll('nav a');
  const logoImg = document.querySelector('#logo-img');
  const ctaImg = document.querySelector('#cta-img');
  const accentImg = document.querySelector('#middle-img');
  const heading = document.querySelector('.cta-text h1');
  const headingButt = document.querySelector('.cta-text button');
  const contentHeading = document.querySelectorAll('.text-content h4');
  const contentPara = document.querySelectorAll('.text-content p');
  const mainContent = ['features-h4', 'about-h4', 'services-h4', 'product-h4', 'vision-h4'];
  const mainPara = ['features-content', 'about-content', 'services-content', 'product-content', 'vision-content']
  const copyright = document.querySelector('footer a');
  const contactH4 = document.querySelector('.contact h4');
  const contactPara = document.querySelectorAll('.contact p');
  const contactContents = ['address', 'phone', 'email'];
  for(let i = 0; i < contactPara.length; i++){
    contactPara[i].textContent = siteContent['contact'][contactContents[i]]
  }
  for(let i = 0; i < mainContent.length; i++){
    contentHeading[i].textContent = siteContent['main-content'][mainContent[i]];
    contentPara[i].textContent = siteContent['main-content'][mainPara[i]];
  }
  for(let i = 0; i < navNodes.length; i++){
    navNodes[i].textContent = siteContent['nav'][`nav-item-${i + 1}`];
    navNodes[i].classList.add('italic');
  };
  heading.textContent = siteContent.cta.h1;
  headingButt.textContent = siteContent.cta.button;
  copyright.textContent = siteContent.footer.copyright;
  contactH4.textContent = siteContent.contact['contact-h4'];
  logoImg['src'] = siteContent['images']['logo-img'];
  ctaImg['src'] = siteContent['images']['cta-img'];
  accentImg['src'] = siteContent['images']['accent-img'];
  copyright.classList.add('bold');
})()

console.log('project wired!')
