const buildForm = document.getElementById('buildForm');

if (buildForm) {
  buildForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const type = form.type?.value || "unspecified";
    const cpu = form.cpu?.value.trim() || "unspecified";
    const gpu = form.gpu?.value.trim() || "unspecified";
    const ram = form.ram?.value.trim() || "unspecified";
    const os = form.os?.value.trim() || "unspecified";

    // Basic validation (optional: improve as needed)
    if (!cpu || !gpu || !ram || !os) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const subject = encodeURIComponent(`Custom Build Request – ${type}`);
    const body = encodeURIComponent(
      `Hello ARZA,\n\nI'd like to request a custom ${type} build with the following specs:\n\n` +
      `CPU: ${cpu}\nGPU: ${gpu}\nRAM: ${ram}\nOS: ${os}\n\n` +
      `Please contact me with a quote or next steps.\n\nThanks.`
    );

    const mailtoLink = `mailto:support@arza.tech?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  });
}
// Find all elements that exactly contain the text "Email Us"
const elements = [...document.querySelectorAll('button, a, div, span')]; // Add more if needed

elements.forEach(el => {
  if (el.textContent.trim() === 'Email Us') {
    // Make it a mailto link
    el.style.cursor = 'pointer';

    // If it's NOT an <a>, convert it to one for proper mailto behavior
    if (el.tagName.toLowerCase() !== 'a') {
      const mailtoLink = document.createElement('a');
      mailtoLink.href = 'mailto:support@arza.tech?subject=Inquiry';
      mailtoLink.textContent = el.textContent;
      mailtoLink.style.color = window.getComputedStyle(el).color;
      mailtoLink.style.textDecoration = 'none';
      mailtoLink.className = el.className; // preserve classes if needed
      el.replaceWith(mailtoLink);
    } else {
      // If it already is <a>, just set href
      el.href = 'mailto:support@arza.tech?subject=Inquiry';
    }
  }
});
document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(header => {
  const text = header.textContent;
  if (text.includes('ARZA')) {
    // Replace "ARZA" with a span that has the gradient class
    const newHTML = text.replace(/ARZA/g, '<span class="arza-gradient">ARZA</span>');
    header.innerHTML = newHTML;
  }
});
