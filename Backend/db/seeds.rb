# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
cats = [{
    name: "Tutankhamun",
    age: 3000,
    location:"Vally of the Kings",
    anthem:"We are never getting back together - Taylor Swift",
    movie:"Tomb Raider",
    enjoys: "Sleeping",
    joke:"What kind of music do mummies like most?",
    image: "https://ychef.files.bbci.co.uk/976x549/p07sdnkd.jpg"
  }, 
]

cats.each do |indiv_cat|
  Cat.create indiv_cat
  p "#{indiv_cat} was added to the database"
end