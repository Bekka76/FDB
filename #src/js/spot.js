const spotBueTab = () =>{
   const spotTabsBueBtn = document.querySelectorAll(".spot-tabs__bue-btn");
   const spotTabBue = document.querySelectorAll(".spot-tab___bue");


   const hideAll = () =>{
      for (let i = 0; i < spotTabsBueBtn.length; i++) {
         spotTabsBueBtn[i].classList.remove('active');
         spotTabBue[i].classList.remove('active');
      }
   };
   for (let i = 0; i < spotTabsBueBtn.length; i++) {
      spotTabsBueBtn[i].addEventListener('click', ()=>{
         console.log(1);
         hideAll();
         spotTabsBueBtn[i].classList.add('active');
         spotTabBue[i].classList.add('active');
      });
      
   }
   
};

spotBueTab();

const spotSellTab = () =>{
   const spotTabsSellBtn = document.querySelectorAll(".spot-tabs__sell-btn");
   const spotTabSell = document.querySelectorAll(".spot-tab___sell");
   console.log(spotTabsSellBtn);
   console.log(spotTabSell);

   const hideAll = () =>{
      for (let i = 0; i < spotTabsSellBtn.length; i++) {
         spotTabsSellBtn[i].classList.remove('active');
         spotTabSell[i].classList.remove('active');
      }
   };
   for (let i = 0; i < spotTabsSellBtn.length; i++) {
      spotTabsSellBtn[i].addEventListener('click', ()=>{
         hideAll();
         spotTabsSellBtn[i].classList.add('active');
         spotTabSell[i].classList.add('active');
      });
      
   }
   
};

spotSellTab();