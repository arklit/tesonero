export default function questionsHandler() {
   const items = document.querySelectorAll('.questions-item');
   const title = document.querySelectorAll('.questions-item__title');
   const text = document.querySelectorAll('.questions-item__text')
   items.forEach(item => {
    const elem = item.querySelector('.questions-item__title');
    elem.addEventListener('click', (e) => {
      if(e.currentTarget.classList.contains('active')) {
        e.currentTarget.classList.remove('active');
        e.currentTarget.nextElementSibling.classList.add('hidden');
      } else {
      title.forEach(item => item.classList.remove('active'))
      text.forEach(item => item.classList.add('hidden'))
      const asd = e.currentTarget;
      const next = asd.nextElementSibling;
        next.classList.remove('hidden');
        asd.classList.add('active');
      }
    })
   })

}