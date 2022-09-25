
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownAdm() {
  return (
    <>
        <div>
        <Dropdown>
      <Dropdown.Toggle variant="transparent" style={{color: "#1C9CD2"}} id="dropdown-basic">
        
      </Dropdown.Toggle>

      <Dropdown.Menu style={{backgroundColor: "#1F1F1F"}}>
        <Dropdown.Item style={{color: "#0ACF83"}} href="#/action-1">Approved</Dropdown.Item>
        <Dropdown.Item style={{color: "#FF0000"}} href="#/action-2">Cancel</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </div>
    </>
    
  );
}

export default DropdownAdm;