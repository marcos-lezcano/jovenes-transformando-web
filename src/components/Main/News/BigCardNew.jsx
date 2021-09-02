import React from 'react'
import Card from "react-bootstrap/Card";
import ButtonJT from '../../../Styles/Buttons/Buttons'

const BigCardNew = (props) => {
  return (
    <div>
      <Card style={{width: "inherit", border:'1px solid #C4C4C4'}}>
      <div style={{overflow:'hidden', height:'250px', display:'flex', alignItems:'center'}} >
        <img width='700px' alt='' src="https://viapais.com.ar/resizer/90Gn-ysQEgIgMffdqiA4te86xeo=/982x551/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/GQYGCZBQG5QWMNZVGQZWCYTCGE.jpg" />
        </div>
        <Card.Body>
          <Card.Title style={{fontSize:"20px", fontFamily:'Jost'}}><stronger>“Jóvenes transformando” se expande en Punilla</stronger></Card.Title>
          <Card.Text  style={{fontSize:"12px", fontFamily:'Jost'}}>
            La organización Jóvenes Transformando, una de las principales impulsoras del voto joven
            en las últimas elecciones celebradas en Villa Carlos Paz, lanzó su...
          </Card.Text>
          <ButtonJT color='D93C00' text='leer más' size='10px'/>
        </Card.Body>
      </Card>
    </div>
  )
}

export default BigCardNew
