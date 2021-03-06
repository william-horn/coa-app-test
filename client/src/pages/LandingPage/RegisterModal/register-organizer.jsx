import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterOrganizer(props) {
    return (
        <Form>
            <h1>Event Organizer Registration</h1>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="city" placeholder="City" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Choose a state:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select your State</option>
              {props.everystate.map(state => {return <option>{state}</option>})}
            </Form.Select>
          </Form.Group>
          {/* <Form.Select aria-label="Default select example">
            <option>Select your State</option>
            {props.everystate.map(state => {return <option>{state}</option>})}
          </Form.Select> */}

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="zipcode" placeholder="Zip Code" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Register as Organizer with this username" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}

export default RegisterOrganizer