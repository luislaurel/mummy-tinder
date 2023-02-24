require 'rails_helper'

RSpec.describe "Cats", type: :request do

  describe "GET /index" do
    it "gets a list of mummys" do
      Cat.create(
        name: "felix",
        age: 69,
        location: "mars",
        anthem: "national",
        movie: "hot fuzz",
        enjoys: "milk and cookies",
        joke: "you mom",
        image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
      )

      get '/cats'

      cat = JSON.parse(response.body)
      expect(cat.length).to eq 1
      expect(response).to have_http_status(200)
      
    end
  end

  describe "POST / create" do
      it "creates a mummy" do
      cat_params = {
        cat: {
          name: "felix",
          age: 69,
          location: "mars",
          anthem: "national",
          movie: "hot fuzz",
          enjoys: "milk and cookies",
          joke: "you mom",
          image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
        }
      }
      post '/cats', params: cat_params

      cat = Cat.first

      json = JSON.parse(response.body).deep_symbolize_keys
      expect(response).to have_http_status(200)
      expect(Cat.count).to eq(1)
      expect(json[:name]).to eq("felix")
      expect(json[:age]).to eq(69)
    end
  end
  
  describe 'PATCH /update' do

    it 'valid cat attributes' do
      cat_params = {
        cat: {
          name: "felix",
          age: 69,
          location: "mars",
          anthem: "national",
          movie: "hot fuzz",
          enjoys: "milk and cookies",
          joke: "you mom",
          image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
        }
      }
      post '/cats', params: cat_params

      cat = Cat.first

      patch "/cats/#{cat.id}", params: {
        cat: {
          name: "felix",
          age: 50,
          location: "mars",
          anthem: "national",
          movie: "hot fuzz",
          enjoys: "milk and muffins",
          joke: "you mom",
          image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
        }
      }
      cat = Cat.first

      catHash = JSON.parse(response.body).deep_symbolize_keys
      expect(response.status).to eq(200)
      expect(catHash[:age]).to eq(50)
      expect(catHash[:enjoys]).to eq( "milk and muffins")
    end
  end

  it 'cannot be created without a name' do
    cat_params = {
      cat: {
        age: 50,
        enjoys: 'Long walks on the beach',
        image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
      }
    }
    post '/cats', params: cat_params
    expect(response.status).to eq 422
  end

  it 'cannot be updated without a name' do
    
    cat = Cat.create(name: 'Dog', age:40, location:'Egypt' ,anthem:'Song', movie:'Movie', enjoys: "Atleast 10 letters", joke: 'Joke', image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80')
  
    cat_params = {
      cat:{
        image: 'two.com',
        enjoys:'walks'
      }
     }

    patch "/cats/#{cat.id}", params: cat_params

    expect(response.status).to eq 422
    
  end
end

