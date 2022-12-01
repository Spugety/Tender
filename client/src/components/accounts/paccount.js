import React from "react";
import { useQuery } from '@apollo/client';
import { SITTER_REQUESTS } from '../../utils/queries';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";


const Parentaccount = () => {
    const { loading, data } = useQuery(SITTER_REQUESTS);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
  
    
    const sitreqs = data?.sitterReqs;
    const log = console.log(sitreqs);
function closereq(e) {
    e.preventDefault();
    console.log("Closed!");
    handleClose();

};
const savereq =(e) => {
    e.preventDefault();
    console.log("Request submitted!");
    handleClose();
}
// function savereq(e) {
//     e.preventDefault();
//     console.log("Request submitted!");
   

// };

    return (
        
        <div className="paccount">

<Modal.Dialog show={show} onHide={closereq}>
      <Modal.Header>
        <Modal.Title>Make Request</Modal.Title>
      </Modal.Header>

      <Modal.Body>
       <form onSubmit={savereq}>
        <input>
        </input>
       </form>
      </Modal.Body>

      <Modal.Footer>
        
        <Button variant="secondary" className="closereq" onClick={closereq}>Close</Button>
        <Button variant="primary" className="savereq" onClick={savereq} type="submit">Save changes</Button>

      </Modal.Footer>
    </Modal.Dialog>
         


            <button type="button" onClick="alert('You pressed the button!')" className="parentProfile"> View Profile
            </button>

            {/* The following below is the current req of parents req */}

            <h1>
                Current Sitter Requests

            </h1>
            <div>

                {loading ? (
                    <div> L O A D I N G  . . . PATIENCE MY FRIEND!</div>
                ) : (
                    <p sitreqs={sitreqs} log={log}> {sitreqs[0].city} {sitreqs[0].time} {sitreqs[0].price} {sitreqs[0].specialRequests} {sitreqs[0].date} </p>
                )}
            </div>

        </div>
    )
}

export default Parentaccount;