const logo = document.querySelector('img');

const onCLick = () => console.log('click event');
const onDoubleCLick = () => {
  console.log('double click event');
  document.body.style.backgroundColor !== 'purple'
    ? ((document.body.style.backgroundColor = 'purple'),
      (document.body.style.color = 'white'))
    : ((document.body.style.backgroundColor = 'white'),
      (document.body.style.color = 'black'));
};

const onRightCLick = () => console.log('right click event');
const onMouseDown = () => console.log('on mouse down event');
const onMouseUp = () => console.log('on mouse up event');
const onMouseWheel = () => console.log('on mouse wheel event');
const onMouseOver = () => console.log('on mouse over event');
const onMouseOut = () => console.log('on mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

//Event Listeners
logo.addEventListener('click', onCLick);
logo.addEventListener('dblclick', onDoubleCLick);
logo.addEventListener('contextmenu', onRightCLick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('mousewheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
