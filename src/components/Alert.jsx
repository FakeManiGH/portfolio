import { faClose, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';
import { useEffect } from 'react';

const Alert = ({ alert, setAlert }) => {

  useEffect(() => {
    if (alert.isOpen) {
      setTimeout(() => {
        setAlert({ 
          isOpen: false,
          message: '',
        });
      }, 3500);
    }
  }, [alert.isOpen, setAlert]);

  const handleClose = () => {
    setAlert({ 
        isOpen: false,
        message: '',
    });
  }

  if (!alert.isOpen) {
    return null;

  } else {
    return (
      <div className={`alert ${alert.type}`}>
        <p className="alert-message">
          {alert.type === 'success' && <FontAwesomeIcon style={{color: 'green', fontSize: '1.5rem'}} icon={faCheckCircle} />}
          {alert.type === 'error' && <FontAwesomeIcon style={{color: 'red', fontSize: '1.5rem'}} icon={faExclamationCircle} />}
          {alert.message}
        </p>
        <button onClick={handleClose}><FontAwesomeIcon icon={faClose} /></button>
      </div>
    );
    
  }
}

Alert.propTypes = {
  alert: propTypes.object,
  setAlert: propTypes.func,
}

export default Alert;