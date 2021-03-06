function scene2() {

  // Setup Stage
  var stage = document.querySelector('#stage');
  document.querySelector('#sets');
  var castle = document.querySelector('#castle');
  var stageImg = stage.querySelector('#stage-img');
  var castleImgSrc = castle.getAttribute('src');
  var stageImg = stage.querySelector('#stage-img');
  stageImg.setAttribute('src', castleImgSrc);


  // Setup Cast
  var nedContainer = document.createElement('div')
  stage.append(nedContainer);
  nedContainer.style.position = 'absolute';
  nedContainer.style.width = '10%';
  nedContainer.style.height = '44%';
  nedContainer.style.top = '50%';
  nedContainer.style.left = '50%';
  nedContainer.style.border = '2px solid red';
  nedContainer.style.background = 'yellow';

  // Character 1 - Ned
  var ned = document.querySelector('#ned');
  nedContainer.append(ned);

  // grab armour
  var leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);
  ned.style.border = '2px solid blue';
  leather.style.border = '2px solid green';

  // align head and body
  ned.style.width = '70%';
  ned.style.position = 'absolute';
  ned.style.top = 0;
  leather.style.position = 'absolute';
  leather.style.bottom = 0;

  // position ned on rock
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%';
  nedContainer.style.left = '25%';

  // remove background and borders
  ned.style.border = 'none';
  leather.style.border = 'none';
  nedContainer.style.border = 'none';
  nedContainer.style.background = 'none';

  // Character 2 - Joffrey
  var joffreyContainer = document.createElement('div')
  joffreyContainer.id = 'joffrey-container';
  stage.append(joffreyContainer);
  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width = '8%';
  joffreyContainer.style.height = '31%';
  joffreyContainer.style.top = '55%';
  joffreyContainer.style.left = '55%';

  var joffrey = document.querySelector('#joffrey');
  joffreyContainer.append(joffrey);
  joffrey.style.width = '75%';
  joffrey.style.position = 'absolute';
  joffrey.style.left = '33%'

  var kingWardrobe = document.querySelector('#king');
  joffreyContainer.append(kingWardrobe);
  kingWardrobe.style.position = 'absolute';
  kingWardrobe.style.bottom = 0;

  // Setup Props

  // Prop 1
  var sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.position = 'absolute';
  sword.style.height = '5%';
  sword.style.transform = 'rotate(150deg)';

  // Prop 2

  // Action!

  // Stage direction 1 - Ned's sword

  //start frame
  frame(function() {
    sword.style.top = '77%';
    sword.style.left = '31%';
  })

  frame(function () {
    sword.style.top = '74%';
    sword.style.left = '36%';
  })

  // middle frame
  frame(function () {
    sword.style.top = '71%';
    sword.style.left = '41%';
  })

  frame(function () {
    sword.style.top = '68%';
    sword.style.left = '47%';
  })

  // end frame
  frame(function() {
    sword.style.top = '64%';
    sword.style.left = '53%';
  })

  // Stage direction 2 - Joffrey's Head

  frame(function() {
  joffrey.style.top = 0;
  joffrey.style.left = '33%';
  joffrey.style.transform = 'rotateZ(220deg)';
})

frame(function() {
  joffrey.style.top = '17%';
  joffrey.style.left = '90%';
  joffrey.style.transform = 'rotateZ(140deg)';
})

frame(function() {
  joffrey.style.top = '35%';
  joffrey.style.left = '160%';
  joffrey.style.transform = 'rotateZ(260deg)';
})

frame(function() {
  joffrey.style.top = '55%';
  joffrey.style.left = '230%';
  joffrey.style.transform = 'rotateZ(180deg)';
})

frame(function() {
  joffrey.style.top = '75%'
  joffrey.style.left = '300%'
  joffrey.style.transform = 'rotateZ(100deg)'
})

}
