import { useState } from "react";

function Accordion({title, children}) {

    const [opened, setOpened] = useState(false)


    return (
        <div className={"accordion " + (opened ? 'opened' : '')}>
            <h3 className='accordion__title' onClick={() => {setOpened(!opened)}}>{title}</h3>
            <ul className='accordion__content'>
            {
                children
            }
            </ul>
      </div>
    );
}

export default Accordion;