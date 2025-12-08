// loader.js

export function initPageLoader(options = {}) {
  const loaderId = options.loaderId || 'page-loader';
  const delayThreshold = options.delayThreshold || 200; // ms before showing loader
  const transitionDuration = options.transitionDuration || 500;

  const loader = document.getElementById(loaderId);
  if (!loader) return;

  let timeout;

  // Function to show loader
  const showLoader = () => {
    loader.style.opacity = 1;
    loader.style.visibility = 'visible';
  };

  // Function to hide loader
  const hideLoader = () => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.visibility = 'hidden';
    }, transitionDuration);
  };

  // Listen to clicks on links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('javascript')) return;

      e.preventDefault();

      // Show loader **only if delay happens**
      timeout = setTimeout(showLoader, delayThreshold);

      // Navigate after small delay (simulate page load)
      setTimeout(() => {
        clearTimeout(timeout); // prevent loader if page loads fast
        window.location.href = href;
      }, 50); // small buffer to allow loader if delay exists
    });
  });

  // Optional: hide loader after page load
  window.addEventListener('load', () => {
    clearTimeout(timeout);
    hideLoader();
  });
}
