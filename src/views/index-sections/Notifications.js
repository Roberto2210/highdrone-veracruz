import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function Notifications() {
  const [alert1, setAlert1] = React.useState(true);
  const [alert2, setAlert2] = React.useState(true);
  const [alert3, setAlert3] = React.useState(true);
  const [alert4, setAlert4] = React.useState(true);
  return (
    <>
      <div className="section section-notifications">
        
       
        <Alert color="warning" isOpen={alert3}>
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons ui-1_bell-53"></i>
            </div>
            <strong>Warning!</strong> Better check yourself, you're not looking
            too good.
            <button
              type="button"
              className="close"
              onClick={() => setAlert3(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
      
      </div>
    </>
  );
}

export default Notifications;
