export default function questionsHandler() {
   const items = document.querySelectorAll('.questions-item');
   items.forEach(item => {
    const elem = item.querySelector('.questions-item__title');
    elem.addEventListener('click', (e) => {
      const asd = e.currentTarget;
      const next = asd.nextElementSibling;
      next.classList.toggle('hidden');
      asd.classList.toggle('active');
    })
   })

}