import React from 'react'
import { Card, CardBody, CardTitle, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const CatIndex = ({ cats }) => {
  return (
    <main >
            <h1 className='headertext imcenter'>Mummy Tinder</h1>
      <div className='margins CatShow'>
      {cats.map((cat, index) => {
        return (
          
          <div className='cat-index-cards'>
                    <Card className="indeximg"
                      style={{ width: '18rem'}}
                      key={index}>
                      <img alt="Sample"
                      src={cat.image}
                      className="indeximgs"
                      />
                      <CardBody className='indextext'>
                        <CardTitle tag="h5">
                          {cat.name}
                        </CardTitle>
                        <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                          <Button>
                            See more details
                          </Button>
                        </NavLink>
                      </CardBody>
                    </Card>
          
          </div>
        ) 
      })}
      </div>
    </main>
  )
}

export default CatIndex