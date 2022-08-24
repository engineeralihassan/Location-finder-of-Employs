'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
// use geo location app
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // position object has many properties like latitude and longitude speed
      // we get the latiturde and longiture
      // let latitude = position.coords.latitude;
      let { latitude, longitude } = position.coords;
      console.log(latitude, longitude);
      // we curently create a google map link
      // make a link

      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      console.log(position);
    },
    function () {
      alert('this is not fetch the current location');
    }
  );
}

// kkkkkkkkkkkk
