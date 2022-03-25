// Fixes view height problem on mobile browsers
const appHeight = () => {
  document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
};
window.addEventListener('resize', appHeight);
appHeight();

// Fetches random quote data on load
const getQuote = () => {
  fetch('https://programming-quotes-api.herokuapp.com/Quotes/random').then((data) => {
    return data.json();
  }).then((quote) => {
    document.getElementById('quote').innerHTML = quote.en;
    document.getElementById('author').innerHTML = quote.author;
  });
};
getQuote();

// Refreshes quotes on button click
const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  getQuote();
});

// Button & slide animation
const btn = document.getElementById('btn');
const main = document.getElementById('main');
const details = document.getElementById('details');
const header = document.querySelector('.header');
btn.addEventListener('click', () => {
  if (!btn.classList.contains('btn-open')) {
    const detailsHeight = details.scrollHeight;
    main.style.transform = `translateY(-${detailsHeight}px)`;
    btn.innerHTML = 'less';
    btn.classList.add('btn-open');
    header.style.opacity = 0;
  } else {
    main.style.transform = `translateY(0)`;
    btn.innerHTML = 'more';
    btn.classList.remove('btn-open');
    header.style.opacity = 1;
  };
})

// Gets local time
function displayTime() {
  const dateTime = new Date();
  const hrs = dateTime.getHours();
  const min = dateTime.getMinutes();
  const hrsFormatted = hrs.toString().padStart(2, "0");
  const minFormatted = min.toString().padStart(2, "0");
  const currentTime = hrsFormatted + ':' + minFormatted;

  document.getElementById('time').innerText = currentTime;

  setTimeout(displayTime, 1000)
}
displayTime();

// Gets timezone and various data for details pane
fetch('http://worldtimeapi.org/api/ip').then((data) => {
    return data.json();
  }).then((time) => {
    const timezone = time.timezone.replaceAll('_', ' ');
    const dayYear = time.day_of_year;
    const dayWeek = time.day_of_week;
    const weekNumber = time.week_number;
    const abbreviation = time.abbreviation;

    document.getElementById('timezone').innerHTML = timezone;
    document.getElementById('dayYear').innerHTML = dayYear;
    document.getElementById('dayWeek').innerHTML = dayWeek;
    document.getElementById('weekNumber').innerHTML = weekNumber;
    document.getElementById('abbreviation').innerHTML = abbreviation;
});

// Adds City, State/Region location below clock
fetch('https://api.freegeoip.app/json/?apikey=94b6a900-ab68-11ec-b828-19d94da961ee').then((data) => {
    return data.json();
  }).then((loc) => {
    const city = loc.city.replaceAll('_', ' ');
    const regionCode = loc.region_code;

    document.getElementById('location').innerHTML = `In ${city}, ${regionCode}`
});

// Displays greeting depending on time of day
const greeting = document.getElementById('greeting');
const time = new Date().getHours();

if (time >= 5 && time < 12) {
  greeting.innerHTML = 'good morning, it\'s currently';
} else if (time >= 12 && time < 18) {
  greeting.innerHTML = 'good afternoon, it\'s currently';
} else if (time >= 18 && time <= 24) {
  greeting.innerHTML = 'good evening, it\'s currently';
} else if (time >= 0 && time < 5) {
  greeting.innerHTML = 'good evening, it\'s currently';
};

// Shortens greeting on smaller screens
// Removes "it's currently"
if (window.innerWidth < 500) {
  greeting.innerHTML = greeting.innerHTML.slice(0, greeting.innerHTML.length - 16);
};

// Cycles background image and details pane color based on time of day
const container = document.getElementById('container');

if (time >= 18 || time < 5) {
  container.classList.add('night-background');
  details.classList.add('night');
  greeting.classList.add('main-greeting-night');
} else {
  container.classList.add('day-background');
  details.classList.add('day');
  greeting.classList.add('main-greeting-day');
};