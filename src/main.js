import {createTripInfoTemplate} from "./view/trip-info.js";
import {createTripMenuTemplate} from "./view/trip-menu.js";
import {createTripFiltersTemplate} from "./view/trip-filters.js";
import {createTripSortTemplate} from "./view/trip-sort.js";
import {createTripListTemplate} from "./view/trip-list.js";
import {createEditPointTemplate} from "./view/trip-edit-point.js";
import {createTripPointTemplate} from "./view/trip-point.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const pageHeader = document.querySelector(`.page-header`);
const tripMainElement = pageHeader.querySelector(`.trip-main`);
const tripControlsElement = pageHeader.querySelector(`.trip-main__trip-controls`);
const pageMain = document.querySelector(`.page-body__page-main`);
const tripEventsSection = pageMain.querySelector(`.trip-events`);

render(tripMainElement, createTripMenuTemplate(), `afterbegin`);
render(tripMainElement, createTripInfoTemplate(), `afterbegin`);
render(tripControlsElement, createTripFiltersTemplate(), `afterbegin`);
render(tripEventsSection, createTripSortTemplate(), `beforeend`);
render(tripEventsSection, createTripListTemplate(), `beforeend`);

const tripList = tripEventsSection.querySelector(`.trip-events__list`);
render(tripList, createEditPointTemplate(), `beforeend`);
render(tripList, createTripPointTemplate(), `beforeend`);
render(tripList, createTripPointTemplate(), `beforeend`);
render(tripList, createTripPointTemplate(), `beforeend`);
