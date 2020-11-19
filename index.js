const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Connected to DB");
})
.catch(err=>{
    console.log(err);
})

const movieSchema= new mongoose.Schema({
    title: String,
    year: Number,
    review: Number,
    rating: String
})

const Movie = mongoose.model('Movie',movieSchema);
Movie.insertMany([
    {title:'Titanic',year:1223,review:9.2,rating:'S'},
    {title:'Titanicads',year:1223,review:9.2,rating:'G'},
    {title:'Titanicumba',year:1223,review:9.2,rating:'J'},
    {title:'Titanicdsrak',year:1223,review:9.2,rating:'K'}
])
    .then(data=>{
        console.log("It worked");
        console.log(data);
    })
