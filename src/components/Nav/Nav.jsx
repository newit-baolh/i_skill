import React from 'react'
import { Col, Row } from 'reactstrap'
import './Nav.css'

function Nav() {
  return (
    <div>
        <Row className='navbar_top'>
            <Col><h1 style={{margin: 0}}>NewIT</h1></Col>
            <Col><input type="radio" checked="checked" /></Col>
        </Row>
    </div>
  )
}

export default Nav