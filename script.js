const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active'); // Reset when leaving viewport
        }
    });
}, { threshold: 0.2 });

reveals.forEach(reveal => {
    observer.observe(reveal);
});
