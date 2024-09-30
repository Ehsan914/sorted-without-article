const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const band = document.getElementById('bands');

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

//bands.sort((a, b) => { return strip(a) > strip(b) ? -1 : 1;}); // if you use second bracket you must use return
bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1); // if you use second bracket you must use return

bands.forEach((a) => {
  band.innerHTML += `<li>${a}</li>`;
})