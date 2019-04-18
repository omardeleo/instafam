# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

seeds = [["demouser", "Demo User", "demo.jpg"],
    ["pizza.24.7", "Pizza Lovers", "pizza.jpg"],
    ["catsofinstafam", "Cats and meowr", "cat.jpg"],
    ["mets_maniac", "Lifelong Mets fan #LGM", "mets.jpg"],
    ["sciencefacts", "Science Facts", "science.jpg"],
    ["classic.simpsons", "Classic Simpsons", "simpsons.jpg"],
    ["retro_80s_90s", "Retro 80's and 90's", "retro.jpg"],
    ["travel_nomad", "World Wanderer", "travel.jpg"],
    ["artistic", "Art Page", "art.jpg"]]

moreSeeds = [["newyorkcity", "New York City", "nyc.jpg"],
    ["seinfeldfans", "Seinfeld Fan Page", "seinfeld.jpg"],
    ["techstuff", "Cool Technology Stuff", "tech.jpg"],
    ["veggies", "Nothing But Vegetables", "veggies.jpg"]]

moreSeeds.each_with_index do |seed, i|
    user = User.create!(
    username: seed[0], 
    password: Rails.application.credentials.demo[:password], 
    email: "example#{i}@example.com", 
    name: seed[1])
    file = open("https://s3.amazonaws.com/instafam-seeds/#{seed[2]}")
    user.image.attach(io: file, filename: seed[2])
end

moreSeeds.each do |seed|
    user = User.where(username: seed[0]).first
    file = open("https://s3.amazonaws.com/instafam-seeds/#{seed[2]}")
    p = Post.new(author_id: user.id, caption: "First Instafam post! 😎🎉")
    p.image.attach(io: file, filename: seed[2])
    p.save!
end

if (User.count == 0)
    seeds.each_with_index do |seed, i|
        user = User.create!(
            username: seed[0], 
            password: Rails.application.credentials.demo[:password], 
            email: "example#{i}@example.com", 
            name: seed[1])
        file = open("https://s3.amazonaws.com/instafam-seeds/#{seed[2]}")
        user.image.attach(io: file, filename: seed[2])
    end

    seeds.each do |seed|
        user = User.where(username: seed[0]).first
        file = open("https://s3.amazonaws.com/instafam-seeds/#{seed[2]}")
        p = Post.new(author_id: user.id, caption: "First Instafam post! 😎🎉")
        p.image.attach(io: file, filename: seed[2])
        p.save!
    end
end

Follow.destroy_all

User.all.each do |user1|
    id1 = user1.id
    User.all.each do |user2|
        id2 = user2.id
        if (id1 != id2) 
            Follow.create!(follower_id: id1, followee_id: id2)
        end
    end
end
