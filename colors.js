var Body = {
setBackgroundColor : function(color){
    document.querySelector('body').style.backgroundColor = color;
  },
setColor : function(color){
    document.querySelector('body').style.color = color;
  }
}

var Link = {
  setColor : function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
     }
  }
}


  function nightdayhandler(self){
  if(self.value === 'bright'){
    Body.setBackgroundColor('#FFE08C');
    Body.setColor('#FF5E00');
    self.value = 'white';
    Link.setColor('powderblue');

    } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'bright';
    Link.setColor('#980000');

  }
}
