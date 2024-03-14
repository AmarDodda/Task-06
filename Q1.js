
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing
//  the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (rating != null && rating !== "") {
            this.rating = rating;
        } else {
            this.rating = "PG";
        }
    }
}



// b.) I've implemented the constructor in Q1 to consider the default behavior which sets the rating to "PG" when no rating is provided.


//c.) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array 
// of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.


class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (rating != null && rating !== "") {
            this.rating = rating;
        } else {
            this.rating = "PG";
        }
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}




//d.)Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”,
// and the rating “PG­13”

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

