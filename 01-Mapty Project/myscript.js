'use strict';

// prettier-ignore
// ///////////////////////////////////////////////////
// variables declarations

let form = document.querySelector('.form');
let containerWorkouts = document.querySelector('.workouts');
let inputType = document.querySelector('.form__input--type');
let inputDistance = document.querySelector('.form__input--distance');
let inputDuration = document.querySelector('.form__input--duration');
let inputCadence = document.querySelector('.form__input--cadence');
let inputElevation = document.querySelector('.form__input--elevation');
// let creae global variable

let map;
let MapEvent;
// geolocation Api
// navigator.geolocation.getCurrentPosition()
// this function is take the 2 call backs functions1 is for sucess

//other is for error

// if (navigator.geolocation) {
//   //   ////////////////////////////////////////////////////////////
//   // get real present locations in js
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       // position object has many properties like latitude and longitude speed
//       // we get the latiturde and longiture
//       // let latitude = position.coords.latitude;
//       let { latitude, longitude } = position.coords;
//       console.log(latitude, longitude);
//       // console.log(position);
//       // we curently create a google map link
//       // make a link
//       //  console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
//       // lets show the map on our web page
//       // copy the leaflet page and put this lik befor our script in the index page of out side
//       // leaflet function we use

//       // let map = L.map('map').setView([51.505, -0.09], 13); //l.map function accept the agruments id name
//       //  of the element wher we want to show the map
//       // setview methids take argumenrs we give our oun longiture latitire
//       let cords = [latitude, longitude];
//       //   let map = L.map('map').setView(cords, 15,34,5,6,7,8); we change the number 13 by any number
//       //   ////////////////////////////////////////////////////////////
//       // show Map in The Map Div
//       map = L.map('map').setView(cords, 13);
//       // this map is becuase of little tiles this is usedthe openstreemap
//       // leaflet also used other maps like google maps
//       // we also change the shap of the maps in the web
//       // lets change the shap od the map

//       // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

//       L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       // L.marker([51.5, -0.09])
//       // this is the simple code we getthis markup according to our own position we click
//       // L.marker(cords)
//       //   .addTo(map)
//       //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//       //   .openPopup();
//       //   on method is the another method of leaflet like evenistners
//       //
//       // HANDLING CLICKS ON MAP

//       map.on('click', function (MapE) {
//         MapEvent = MapE;
//         //   let { lat, lng } = MapEvent.latlng;
//         //   now we set this thing the onclcick event
//         // now we customize this popup style
//         //   we comment out his
//         //   ////////////////////////////////////////////////////////////
//         // change the apperance of the popup
//         //   L.marker([lat, lng])
//         //     .addTo(map)
//         //     .bindPopup(
//         //       L.popup({
//         //         maxWidth: 250,
//         //         minWidth: 100,
//         //         autoClose: false,
//         //         closeOnClick: false,
//         //         className: 'running-popup',
//         //       })
//         //     )
//         //     .setPopupContent('WorkOut')
//         //     .openPopup();
//         //   ////////////////////////////////////////////////////////////
//         // show form when click
//         form.classList.remove('hidden');
//         inputDistance.focus();
//       });
//     },
//     function () {
//       alert('this is not fetch the current location');
//     }
//   );
// }
// console.log(na);
//   ////////////////////////////////////////////////////////////
// Eventlistener Submit for form
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   //   //////////////////////////////
//   // clear inputs fields
//   inputDistance.value =
//     inputCadence.value =
//     inputDuration.value =
//     inputElevation.value =
//       '';

//   // display marker
//   //   there are the 2 problemes error becuase have 2 variables
//   //   in this are not declzire in this scope

//   let { lat, lng } = MapEvent.latlng;
//   L.marker([lat, lng])
//     .addTo(map)
//     .bindPopup(
//       L.popup({
//         maxWidth: 250,
//         minWidth: 100,
//         autoClose: false,
//         closeOnClick: false,
//         className: 'running-popup',
//       })
//     )
//     .setPopupContent('WorkOut')
//     .openPopup();
// });

// /////////////////////////////////////////////////////////
// change input fields
// inputType.addEventListener('change', function () {
//   // inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//   // inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// });
// ************************************************************************************************88888888
// WORKOUT CLASS
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this.date=...
    //  this.id=...
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }
  _description() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    console.log(this.type);

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)}
     on  ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}
// ///////////////////////////////////
// RUNNING CLASS
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._description();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
// ///////////////////////////////////
// CYCLING  CLASS
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcspeed();
    this._description();
  }
  calcspeed() {
    //KMH
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// let run = new Running([39, -29], 5.2, 24, 178);
// let cycle = new Cycling([39, -29], 27, 95, 523);
// console.log(run, cycle);

// //////////////////////////////////////////////////////////
//WORK ACCORDING TO ARCHITECTURE IN OOP
class App {
  map;
  MapEvent;
  workouts = [];
  constructor() {
    this._getPosition();
    // dget data from local stoarage
    this._getLocalStorage();

    // attach enet handlers
    form.addEventListener('submit', this._newWorkOut.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveMap.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation) {
      //   ////////////////////////////////////////////////////////////
      // get real present locations in js
      navigator.geolocation.getCurrentPosition(
        this._LoadMap.bind(this),
        function () {
          alert('this is not fetch the current location');
        }
      );
    }
  }
  _LoadMap(position) {
    console.log(position);

    let { latitude, longitude } = position.coords;

    let cords = [latitude, longitude];
    //   ////////////////////////////////////////////////////////////
    // show Map in The Map Div
    console.log(this);
    // this is undefined becuase this in regular function call is undefined we bind this methids wher we call

    this.map = L.map('map').setView(cords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    // HANDLING CLICKS ON MAP

    this.map.on('click', this._showForm.bind(this));
    this.workouts.forEach(work => {
      this.renderWorkoutMarker(work);
    });
  }
  //   ////////////////////////////////////////////////////////////
  // show form when click
  _showForm(MapE) {
    this.MapEvent = MapE;

    form.classList.remove('hidden');
    inputDistance.focus();
  }
  _hideForm() {
    // Empty the input
    inputDistance.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    setTimeout(() => {
      form.style.display = 'grid';
    }, 1000);

    form.classList.add('hidden');
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }
  // /////////////////////////////////////////////////////
  _newWorkOut(e) {
    let validinputs = function (...inputs) {
      return inputs.every(inp => Number.isFinite(inp));
    };
    let allPositive = function (...inputs) {
      return inputs.every(inp => inp >= 0);
    };

    e.preventDefault();
    // ////////////////////////////////////////
    // Get Data fro  from
    let type = inputType.value;
    let distance = +inputDistance.value;
    let duration = +inputDuration.value;
    let { lat, lng } = this.MapEvent.latlng;
    let workout;

    // Check if valid

    // if Workout is running create running object***************************
    if (type === 'running') {
      let cadence = +inputCadence.value;
      // Check if valid
      if (
        //   !Number.isFinite(distance) ||
        //   !Number.isFinite(duration) ||
        //   !Number.isFinite(cadence)
        // )
        //   return alert('Input must be Number ');
        // new methods neat methods
        !validinputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('inputs are must +numbers');
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if Workout is cycling create cycling object**********************88888
    if (type === 'cycling') {
      let elevation = +inputElevation.value;
      // Check if valid
      if (
        !validinputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert('inputs are must +numbers');
      }
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }
    this.workouts.push(workout);
    console.log('workout is', workout);

    // Add new object in the workout arrays*******************************888
    // render workout on map  as a marker***********************
    // display marker
    //   there are the 2 problemes error becuase have 2 variables
    //   in this are not declzire in this scope
    this.renderWorkoutMarker(workout);

    // render workout on list****************************88888
    this._RenderWorkout(workout);

    // hide the form***************************
    this._hideForm();

    // local staorage***********************************
    this._setLocalStorage();
  }
  // ////////////////////////////////////////////////////
  renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        ` ${workout.type === 'running' ? '🏃' : '⚡️'}${workout.description}`
      )
      .openPopup();
  }
  // kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
  _RenderWorkout(workout) {
    let li = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃' : '💡'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
    
    `;
    // llllll
    if (workout.type === 'running') {
      li += ` <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    }
    if (workout.type === 'cycling') {
      li += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">KM/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>

        `;
    }
    form.insertAdjacentHTML('afterend', li);
  }
  _moveMap(e) {
    let workoutEl = e.target.closest('.workout');
    console.log(workoutEl);
    if (!workoutEl) return;
    let workout = this.workouts.find(el => el.id === workoutEl.dataset.id);
    console.log(workout);
    this.map.setView(workout.coords, 13, {
      Animate: true,
      pan: {
        duration: 1,
      },
    });
    //usein that public interface
    workout.click();
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
  }
  _getLocalStorage() {
    // let data = localStorage.getItem('workouts');
    // we parse back into the data form
    // in local storage data is lost the chaining of prototype
    // so we again recover the actual objcts

    let data = JSON.parse(localStorage.getItem('workouts'));
    let data1 = data;
    console.log(data1);
    if (!data1) return;
    this.workouts = data1;
    this.workouts.forEach(work => {
      this._RenderWorkout(work);
    });
  }
  // //////////////////////
  //remove all the lists from local storage

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

let app = new App();
