import React, {useState} from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import axios from 'axios'

const HomePage = () => {
	const [message1, setMessage1] = useState('')
	const [message2, setMessage2] = useState('')
	const [message3, setMessage3] = useState('')



	const pingServer = () => {
		console.info ("Ping")
		axios.get ('http://localhost:3001/ping')
	.then (response=>{
		console.info ("response: ", response)
		setMessage1(response.data.message)
	})
	.catch(err => console.log(err))
	}

	const sendHello = () => {
		axios.get ('http://localhost:3001/hello')
	.then (response=>{
		console.info ("response: ", response)
		setMessage2(response.data.message)
	})
	.catch(err => console.log(err))
	}


	const sendCpp = () => {
		axios.get ('http://localhost:3001/cpp')
	.then (response=>{
		console.info ("response: ", response)
		setMessage3(response.data.message)
	})
	.catch(err => console.log(err))
	}

	return (
		<div className="Page">
			<h2 className="Page-header">Home Page</h2>
      <div className= "Page-content">
				<Container>
					<Row className = "Page-row">
						<Col>
							<Button className="Page-button" variant="outline-primary" onClick = {pingServer}>Ping</Button>
						</Col>
						<Col>
							{message1}
						</Col>				
					</Row>				
					<Row className = "Page-row">
					<Col>
						<Button className="Page-button" variant="outline-success" onClick = {sendHello}>Hello</Button>
						</Col>
						<Col>
						{message2}
						</Col>
						</Row>
						<Row className = "Page-row">
						<Col>
							<Button className="Page-button" variant="outline-dark" onClick = {sendCpp}>CPP</Button>
						</Col>
						<Col>
							{message3}
						</Col>
					</Row>				
				</Container>			
			</div>
		</div>
	)
}
export default HomePage