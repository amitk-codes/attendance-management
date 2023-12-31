import Accordion from 'react-bootstrap/Accordion';
import GraphIcon from "../../assets/icons/graph_icon.svg"
import WhiteGraphIcon from "../../assets/icons/white_graph_icon.svg"
import { useState } from 'react';

const AccordianTab = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className='sidebar-accordion-tab'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <img src={open ? WhiteGraphIcon : GraphIcon} alt='graph icon' style={{marginLeft: "-10px", marginRight: "10px"}} />
          My Space
        </Accordion.Header>
        <Accordion.Body onExiting={()=>setOpen(false)} onEntering={()=>setOpen(true)}>
          <div className='text-white d-flex flex-column' style={{marginLeft: "15px", gap: "10px"}}>
            <div>Leave</div>
            <div style={{color: "#f3a84d"}}>Attendance</div>
            <div>Performance</div>
            <div>Expenses & Travel</div>
            <div>Help Desk</div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

    </div>
  );
}

export default AccordianTab;