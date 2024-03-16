
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Forms from "./Forms";
import {carData} from '../data/data.js'
import { useState } from 'react';
import { Container } from 'react-bootstrap';

function LogoCards() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState('');
  return (<>
  {

(carData.brand).map((dat, index) => {
    // return Object.values(dat).map((car, i) => {
        return (
            <>
            {
                
             <Card key={dat.model} style={{ width: '13rem', height: '13rem' }}>
          <Card.Img style={{ width: '10rem', height: '10rem' }} variant="top" src={dat.photos} />
          <Card.Body>
            <Card.Title>{dat.name}</Card.Title>
            <Card.Text>
            {dat.name}
            </Card.Text>
            <Button variant="primary" onClick={()=>
                {setShow(!show);
                    setTarget(dat.name);
                }
                }>Get car Details</Button>
          </Card.Body>
        </Card>
        
    }
            </>
        )
    // })
})
  }
    
    <br/>
    <hr/>
    <div className='forms-cont'>
    <Forms key={target} data={carData.brand} show={show} target={target}/>
    </div>
    </>
  );
}

export default LogoCards;