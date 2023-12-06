var isMaxSize = false;
var circleSize = 24;
const circleMinSize = 24;

function updateCircleSize(){
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const circleStyle = document.getElementById('circle').style;

    if(!isMaxSize){
      circleSize = circleSize * 2
      if(circleSize * 2 > windowWidth ||  circleSize * 2 > windowHeight){
        isMaxSize = true;
        circleStyle.backgroundColor = '#FF9800';
      }
    }else if(isMaxSize ){
      circleSize = circleSize / 2;
      if(circleSize <= circleMinSize){
        isMaxSize = false;
        circleStyle.backgroundColor = 'DodgerBlue';
      }
    }

    // Update the circle size
    circleStyle.width = circleSize + 'px';
    circleStyle.height = circleSize + 'px';
}