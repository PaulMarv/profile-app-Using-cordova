//functions
const slide= function show(){
  document.querySelector('.sidebar').classList.toggle('active');
}
const windowLoad = ()=>{document.querySelector('.personal-details-box').classList.toggle ('active')};

 //App controller
 App.controller('home', function (page) {
    // put stuff here
    $(page).on('appReady', function () {
      windowLoad();
    });

    $(page)
    .find('.toggle-btn')
    .on('click', slide)
  });
  


  App.controller('page2', function (page) {
    // put stuff here
  });

  App.controller('page3', function (page) {
    // put stuff here
  });


  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }


