console.log("js is linked");


$(document).ready(function () {
    var tvShows = [];

    function addButtons() {
        $("#buttons-appear-here").empty();
        for (var i = 0; i < tvShows.length; i++) {
            var addButton = $("<button>");
            addButton.addClass("tv-show");
            // a.attr("data-name", movies[i]);
            addButton.text(tvShows[i]);
            $("#buttons-appear-here").append(addButton);
        }

    }

    $("#submit").on("click", function (event) {
        event.preventDefault();

        // This line will grab the text from the input box
        var tvShow = $("#user-input").val().trim();
        console.log(tvShow);
        tvShows.push(tvShow);
        console.log(tvShows);

        addButtons();
    });



    // $("button").on("click", function () {
    //     var person = $(this).attr("data-person");
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //         person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    //     $.ajax({
    //         url: queryURL,
    //         method: "GET",

    //     })
    //         .then(function (response) {
    //             var results = response.data;
    //             console.log(results)
    //             console.log(response)

    //             for (var i = 0; i < results.length; i++) {
    //                 var gifDiv = $("<div>");

    //                 var rating = results[i].rating;

    //                 var p = $("<p>").text("Rating: " + rating);
    //                 console.log(results[i])
    //                 var personImage = $("<img>");
    //                 personImage.attr("src", results[i].images.fixed_height.url);

    //                 gifDiv.prepend(p);
    //                 gifDiv.prepend(personImage);

    //                 $("#gifs-appear-here").prepend(gifDiv);
    //             }
    //         });
    // });

});