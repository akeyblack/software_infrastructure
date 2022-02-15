module.exports.seeds = {
  genres: [
    {
      name: "Book",
      description: "Book Musicals"
    },
    {
      name: "Revue",
      description: "Revue Musicals"
    },
    {
      name: "Film",
      description: "Film Musicals"
    },
    {
      name: "Concept",
      description: "Concept Musicals"
    }
  ],
  shows: [
    {
      name: "First Show",
      genre: 1,
      duration: 123,
      description: "My first show"
    },
    {
      name: "Second Show",
      genre: 2,
      duration: 123,
      description: "My second show"
    },
    {
      name: "Third evening Show",
      genre: 3,
      duration: 223,
      description: "My third show"
    }
  ],
  workers: [
    {
      fullname: "Vladyslav",
      age: 20,
      gender: "Male",
      address: "Kiyv, Zhytomyrska, 15",
      phoneNumber: "+3805555555",
      info: "Director"
    },
    {
      fullname: "Andriy",
      age: 20,
      gender: "Male",
      address: "Kiyv, Zhytomyrska, 18",
      phoneNumber: "+3807777777",
      info: "Actor"
    },
    {
      fullname: "Anna",
      age: 20,
      gender: "Female",
      address: "Kiyv, Zhytomyrska, 20",
      phoneNumber: "+3801111111",
      info: "Actress"
    }
  ]
}
