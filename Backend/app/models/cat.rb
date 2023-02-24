class Cat < ApplicationRecord
    validates :name, :age, :location, :anthem, :movie, :enjoys, :joke, presence: true
    validates :enjoys, length: { minimum: 10 }
end
