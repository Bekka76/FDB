

const tabs = () =>{
   const tabsItem = document.querySelectorAll('.tabs__item');
   const tabsBlock = document.querySelectorAll('.tabs__block');

   const hideAll = () =>{
      for (let i = 0; i < tabsItem.length; i++) {
         tabsItem[i].classList.remove('active');
         tabsBlock[i].classList.remove('active');
      }
   };
   for (let i = 0; i < tabsItem.length; i++) {
      tabsItem[i].addEventListener('click', ()=>{
         console.log(1);
         hideAll();
         tabsItem[i].classList.add('active');
         tabsBlock[i].classList.add('active');
      });
      
   }
   
};

tabs();