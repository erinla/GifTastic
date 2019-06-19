$(document).ready(function () {
  var tvShows = ['new girl', 'the office', 'brooklyn 99', 'parks and rec', 'seinfeld', '30 rock', 'how i met your mother', 'modern family', 'the good place'];

  function addButtons() {
    $('#buttons-appear-here').empty();
    for (var i = 0; i < tvShows.length; i++) {
      var addButton = $('<button>');
      addButton.addClass('tv-show', 'text-info');
      addButton.attr('data-program', tvShows[i]);
      addButton.text(tvShows[i]);
      $('#buttons-appear-here').append(addButton);
    }
  }

  addButtons();

  $('#submit').on('click', function (event) {
    event.preventDefault();
    var tvShow = $('#user-input')
      .val()
      .trim();
    tvShows.push(tvShow);
    addButtons();
  });

  $(document).on('click', '.tv-show', function () {
    $('#gifs-appear-here').empty();
    var program = $(this).attr('data-program');
    var queryURL =
      'https://api.giphy.com/v1/gifs/search?q=' +
      program +
      '&api_key=ZJtZOUSM26x0m1plnw3Ns5FjnDHH23I4';
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function (response) {
      var results = response.data;
      for (var i = 0; i < 8; i++) {
        var gifDiv = $('<div>');
        var rating = results[i].rating;
        var p = $('<p>').text('Rating: ' + rating);
        var personImage = $('<img>');
        personImage.addClass('gifImage');
        personImage.attr('src', results[i].images.fixed_height_still.url);
        personImage.attr(
          'data-still',
          results[i].images.fixed_height_still.url
        );
        personImage.attr('data-animate', results[i].images.fixed_height.url);
        personImage.attr('data-state', 'still');
        gifDiv.prepend(p);
        gifDiv.prepend(personImage);

        $('#gifs-appear-here').prepend(gifDiv);
      }
    });
  });

  $(document).on('click', '.gifImage', function () {
    var state = $(this).attr('data-state');
    if (state === 'still') {
      $(this).attr('src', $(this).attr('data-animate'));
      $(this).attr('data-state', 'animate');
    } else {
      $(this).attr('src', $(this).attr('data-still'));
      $(this).attr('data-state', 'still');
    }
  });
});
