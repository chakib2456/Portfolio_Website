const b = document.querySelector('.menu-toggle');
const n = document.querySelector('.nav');

if (b && n) {
  b.onclick = () => n.classList.toggle('open');

  n.querySelectorAll('a').forEach(a => {
    a.onclick = () => n.classList.remove('open');
  });
}


// Download Resume Files

function downloadResumeFiles() {
  const files = [
    "assets/Document/Chakib_Ould_Hamou_Game_Developer_Resume.pdf",
    "assets/Document/Chakib_Ould_Hamou_Software_Engineer_Resume.pdf"
  ];

  files.forEach((file) => {
    const link = document.createElement("a");

    link.href = file;
    link.download = "";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}