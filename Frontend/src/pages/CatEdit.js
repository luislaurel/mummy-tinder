import React, {useState} from 'react'
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {  useNavigate, useParams } from 'react-router-dom'



// so my goal here is to pretty much combine new and show.
//  so i want the form from new, but i also want the from filled in with the info from show
// and then i want to submit it as an update/edit but not change the primary key id


const CatEdit = ({cats, updateCat}) => {

  const { id } = useParams()

  const currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    location: currentCat.location,
    anthem: currentCat.anthem,
    movie: currentCat.movie,
    enjoys: currentCat.enojoys,
    joke: currentCat.joke,
    image: currentCat.image
  })

  const handleCats = (e) => {
    setEditCat({...editCat, [e.target.name]: e.target.value})
  }
  const navigate = useNavigate()

  const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate("/catindex")
  }
  return (
    <>
        <h2> Edit your Mummy </h2>
        <div className='imcenter'>
        <Form>
          <FormGroup className="formgroup">
            <Label for="name">Mummy's Name</Label>
            <Input
              name="name"
              placeholder = "First-name? Pharoah-name? Nick-name? Screen-name? We dont care, just give us a name!"
              type="text"
              onChange={handleCats}
              value={editCat.name}
            />
            <Label for="age">Age</Label>
            <Input
              name="age"
              placeholder="AGE...d like a fine wine, heck yes you did. Lets count them crows feet like tree rings. How old are? "
              type="number"
              onChange={handleCats}
              value={editCat.age}
            />
            <Label for="location">Tomb Location</Label>
            <Input
              name="location"
              placeholder="Museuem of Natural History? Secret pyramid burried under sand?"
              type="text"
              onChange={handleCats}
              value={editCat.location}
            />
            <Label for="anthem">Anthem</Label>
            <Input
              name="anthem"
              placeholder="Its in every playlist, you know every word. What song is your anthem?"
              type="text"
              onChange={handleCats}
              value={editCat.anthem}
            />
            <Label for="movie">Favorite Movie</Label>
            <Input
              name="movie"
              placeholder="You wanna Netflix and Chill dont you? If nothing else in your profile turned them on, this will for sure... Whats your favorite film?"
              type="text"
              onChange={handleCats}
              value={editCat.movie}
            />
            <Label for="enjoys">Hobbies</Label>
            <Input
              name="enjoys"
              placeholder="Board games? Ping-Pong? Draw pictures on the wall with your sevants blood? What hobbies do you have?"
              type="text"
              onChange={handleCats}
              value={editCat.enjoys}
            />
            <Label for="joke">Favorite Joke</Label>
            <Input
              name="joke"
              placeholder="Nothing is funnier than you sex life, but its worth a shot. Whats your best joke?"
              type="text"
              onChange={handleCats}
              value={editCat.joke}
            />
            <Label for="image">Mummy Profile</Label>
            <Input
              name="image"
              placeholder="Whoops stole your soul. haha just kidding, upload a photo, try to not have glasses on, and smile, lets see them pearly whites."
              type="url"
              onChange={handleCats}
              value={editCat.image}
            />
          </FormGroup>
          <Button
            onClick={handleSubmit}
            name="submit"
          >
            Update
          </Button>
        </Form>
        </div>
      <br></br>
      <br></br>
      <br></br>
      </>
    
  )
}

export default CatEdit