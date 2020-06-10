import { PUZZLE_PAGE } from './variables.js';

// PUZZLE_PAGE.addEventListener('click', (event) => {
//   if (event.target.classList.contains('puzzle-item')) {
//     RESULT_STRING.append(event.target);
//   }
// });

document.body.addEventListener('mousedown', (event) => {
  // console.log(event);
  const element = event.target;

  if (element.classList.contains('puzzle-item')) {
    element.style.position = 'absolute';
    element.style.zIndex = 1000;
    document.body.append(element);

    moveAt(event.pageX, event.pageY);
    element.addEventListener('mousemove', onMouseMove);
  }

  function moveAt(pageX, pageY) {
    element.style.left = `${pageX - element.clientWidth / 2}px`;
    element.style.top = `${pageY - element.clientHeight / 2}px`;
  }

  function onMouseMove(cursor) {
    moveAt(cursor.pageX, cursor.pageY);

    element.hidden = true;
    const elementBelow = document.elementFromPoint(event.clientX, event.clientY);
    // element.hidden = false;

    // if(elementBelow.classList.contains('.result-string')) {
    //   console.log('asdasdasdsfsfs');
    // }

    console.log(elementBelow);

    // const droppableBelow = elementBelow.closest('.result-string');
    // console.log(elementBelow, droppableBelow);
  }

  element.addEventListener('mouseup', () => {
    element.removeEventListener('mousemove', onMouseMove);
  });
});
