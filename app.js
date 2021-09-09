class Media {
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating() {
    let sumRating = this.ratings.reduce((acc, val) => acc + val);
    let averRating = sumRating / this.ratings.length;
    return averRating.toFixed(1);
  }
  addRating(val) {
    this.ratings.push(val);
  }
}

class Book extends Media {
  constructor(author, title, pages){
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, movieCast){
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
}

class Song extends Media {
  constructor(artist, title, duration, genre) {
    super(title);
    this._artist = artist;
    this._duration = duration;
    this._genre = genre;
  }
  get artist() {
    return this._artist;
  }
  get duration() {
    return this._duration;
  }
  get genre() {
    return this._genre;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116, ['Hillary Swank', 'Leo DiCaprio', 'Dakota Fanning']);
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const song1 = new Song('Gilberto Santa Rosa', 'Conciencia', 4.15, 'Salsa');
song1.toggleCheckOutStatus();
song1.addRating(5);
song1.addRating(5);
song1.addRating(5);
console.log(song1.getAverageRating());