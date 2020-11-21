const keys = document.querySelectorAll('.key');

function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // Stop the function from running all together
  if (!audio) return;
  playAudioAddClass(audio, key);
}

function playAudioAddClass(audio, key) {
  // Rewind to the start
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  // Skip it if it's not a transform
  if (e.propertyName === 'transform') {
    this.classList.remove('playing');
  }
}

function clickMouse(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.currentTarget.dataset.key}"]`
  );
  playAudioAddClass(audio, this);
}

window.addEventListener('keydown', playSound);
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
keys.forEach((key) => key.addEventListener('click', clickMouse));
