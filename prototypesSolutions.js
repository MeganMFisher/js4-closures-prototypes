// 1.1

function Movie(name, genre, rating) {
    this.name = name;
    this.genre = genre;
    this.rating = rating;
}

Movie.prototype.changeRating = function(num) {
    return this.rating = (this.rating + num) / 2;
}



// 1.2 

function User(name, age, email, savedPosts) {
    this.name = name, 
    this.age = age, 
    this.email = email, 
    this.savedPosts = savedPosts
  }
  
  User.prototype.addSavedPost = function(id, title, rating) {
    var obj = {
      id: id, 
      title: title, 
      rating: rating
    }
   return this.savedPosts.push(obj)
   
  }


// 1.3 

function User(name, age, email, savedPosts) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.savedPosts = savedPosts;
  }
  
  User.prototype.addSavedPost = function(id, title, rating) {
    this.savedPosts.push({id, title, rating})
  }
  
  User.prototype.removeSavedPost = function(id) {
    this.savedPosts.map((e, i) => {
      if (e.id === id) {
        this.savedPosts.splice(i, 1)
      }
    })
    return this.savedPosts
  }
  
  



// 1.4 

function User(name, age, email, savedPosts) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.savedPosts = savedPosts;
  }
  
  User.prototype.addSavedPost = function(id, title, rating) {
    this.savedPosts.push({id, title, rating})
  }
  
  User.prototype.removeSavedPost = function(id) {
    this.savedPosts = this.savedPosts.filter(e => e.id !== id)
  }
  
  User.prototype.changePostRating = function(id, rating) {
    this.savedPosts.map(e => {
      if(e.id === id) {
        e.rating = rating
      }
    })
  }