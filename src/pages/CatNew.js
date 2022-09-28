import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { BrowserRouter, useNavigate } from 'react-router-dom'

const CatNew = ({ createCat }) => {

  const navigate = useNavigate()

  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    location: "",
    anthem:"",
    movie:"",
    enjoys: "",
    joke:"",
    image: ""
  })

  const handleCats = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value})
    console.log(newCat)
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  console.log("newcat object", newCat)
  
    return (
      <>
        <h2> Add a Mummy </h2>
        <div className='formStyling'>
        <FormGroup className='formgroup'>
            <Label for="name">Mummy's Name</Label>
            <Input
              name="name"
              placeholder="First-name? Pharoah-name? Nick-name? Screen-name?"
              type="text"
              onChange={handleCats}
              value={newCat.name}
            />
            <br></br>
            <Label for="age">Age</Label>
            <Input
              name="age"
              placeholder="AGE...d like a fine wine. Lets count them crows feet like tree rings."
              type="number"
              onChange={handleCats}
              value={newCat.age}
            />
            <br></br>
            <Label for="location">Tomb Location</Label>
            <Input
              name="location"
              placeholder="Museuem of Natural History? Secret pyramid burried under sand?"
              type="text"
              onChange={handleCats}
              value={newCat.location}
            />
            <br></br>
            <Label for="anthem">Anthem</Label>
            <Input
              name="anthem"
              placeholder="Its in every playlist, you know every word. What song is your anthem?"
              type="text"
              onChange={handleCats}
              value={newCat.anthem}
            />
            <br></br>
            <Label for="movie">Favorite Movie</Label>
            <Input
              name="movie"
              placeholder="You wanna Netflix and Chill dont you? Whats your favorite film?"
              type="text"
              onChange={handleCats}
              value={newCat.movie}
            />
            <br></br>
            <Label for="enjoys">Hobbies</Label>
            <Input
              name="enjoys"
              placeholder="Board games? Ping-Pong? Draw pictures on the wall with your sevants blood?"
              type="text"
              onChange={handleCats}
              value={newCat.enjoys}
            />
            <br></br>
            <Label for="joke">Favorite Joke</Label>
            <Input
              name="joke"
              placeholder="Nothing is funnier than you sex life, but its worth a shot. Whats your best joke?"
              type="text"
              onChange={handleCats}
              value={newCat.joke}
            />
            <br></br>
            <Label for="image">Profile Picture</Label>
            <Input
              name="image"
              placeholder="Whoops stole your soul. haha just kidding, lets see them pearly whites. img url?"
              type="url"
              onChange={handleCats}
              value={newCat.image}
            />
            <br></br>
          <Button
            onClick={handleSubmit}
            name="submit"
          >
            Submit
          </Button>
        </FormGroup>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </>
    )
  }
  
export default CatNew