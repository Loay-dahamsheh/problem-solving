//Ex7:
const names = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
const allNames = [];

names.forEach(name => {
    allNames.push(name);
});

console.log(allNames);


//Ex8:
function projectSeries(series) {
    let result = [];

    series.forEach(item => {
        const { id, title } = item;
        result.push({ id, title });
    });

    return result;
}

let newSeries = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
        
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }

];

let projectedSeries = projectSeries(newSeries);
console.log(projectedSeries);





// Ex9:
function projectSeries(series) {
    return series.map(item => {
        const { id, title } = item;
        return { id, title };
    });
}

let newSeries1 = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
        
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

let projectedSeries1 = projectSeries(newSeries1);
console.log(projectedSeries1);





// Ex10:
function filterSeriesByRating(series) {
    return series.filter(item => {
        // Assuming the rating property is an array, and we want to check if any rating is under 5
        const isUnderFive = item.rating.some(rating => rating < 5);
        return isUnderFive;
    });
}

let newSeries2 = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
		"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": [4.0],
		"bookmark": []
        
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
    
];

let seriesWithRatingUnderFive = filterSeriesByRating(newSeries2);
console.log(seriesWithRatingUnderFive);



// Ex11:
let languages = ["Java", "JavaScript", "Python", "C++", "PHP"];

let longestString = languages.reduce((longest, current) => {
    // Compare the length of the current string with the longest string found so far
    return current.length > longest.length ? current : longest;
}, "");

console.log(longestString);



// Ex12:
let pokemonData = [
    {
        "game_index": 76,
        "version": {
          "name": "red",
          "url": "https://pokeapi.co/api/v2/version/1/"
        }
      },
      {
        "game_index": 76,
        "version": {
          "name": "blue",
          "url": "https://pokeapi.co/api/v2/version/2/"
        }
      },
      {
        "game_index": 76,
        "version": {
          "name": "yellow",
          "url": "https://pokeapi.co/api/v2/version/3/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "gold",
          "url": "https://pokeapi.co/api/v2/version/4/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "silver",
          "url": "https://pokeapi.co/api/v2/version/5/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "crystal",
          "url": "https://pokeapi.co/api/v2/version/6/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "ruby",
          "url": "https://pokeapi.co/api/v2/version/7/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "sapphire",
          "url": "https://pokeapi.co/api/v2/version/8/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "emerald",
          "url": "https://pokeapi.co/api/v2/version/9/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "firered",
          "url": "https://pokeapi.co/api/v2/version/10/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "leafgreen",
          "url": "https://pokeapi.co/api/v2/version/11/"
        }
      },
      {
        "game_index": 132,
        "version": {
          "name": "diamond",
          "url": "https://pokeapi.co/api/v2/version/12/"
        }
    }
];

function displayName(data) {
    return data.reduce((names, item) => {
        names.push(item.version.name);
        return names;
    }, []);
}

let namesArray = displayName(pokemonData);
console.log(namesArray);



// Ex13:

// Hi Coach ! Rawan
// Car owner? undefined
// empty