import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import propTypes from 'prop-types';

const Alert = ({ alert, setAlert }) => {

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
        <p>{alert.message}</p>
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