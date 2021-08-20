$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path");
  var flatsPath = $(".flats path");
  var flatsLink = $(".flat-link");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-flats");

  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
    $(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
  });

  flatsPath.on("mouseover", function () {
    flatsLink.removeClass("current-flat-link");
    currentFlat = $(this).attr("data-flat");
    $(`.flat-link[data-flat=${currentFlat}]`).toggleClass("current-flat-link");
  });

  flatsPath.on("mouseout", function () {
    flatsLink.removeClass("current-flat-link");
  });

  flatsLink.on("mouseover", function () {
    flatsPath.removeClass("current-flat");
    currentFlat = $(this).attr("data-flat");
    $(`path[data-flat=${currentFlat}]`).toggleClass("current-flat");
  });

  flatsLink.on("mouseout", function () {
    flatsPath.removeClass("current-flat");
  });

  floorPath.on("click", toggleModal);
  modalCloseButton.on("click", toggleModal);
  viewFlatsButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
