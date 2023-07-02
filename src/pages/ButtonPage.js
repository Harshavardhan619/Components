import { GoArrowDown, GoBell, GoCloudDownload, GoDatabase, GoFileDirectory } from 'react-icons/go';
import React from 'react';
import Button from '../components/Button';

function ButtonPage() {

const handleClick = () => {
    console.log ('click here')
}

  return (
    <div>
        <div>
            <Button
             primary
             outline
              rounded 
              className="mb-5"
              onClick={handleClick}
              > <GoBell/> click here !!</Button>
        </div>
        <div>
            <Button success outline  > < GoFileDirectory/>success</Button>
        </div>
        <div>
            <Button secondary rounded outline > <GoCloudDownload />see more</Button>
        </div>
        <div>
            <Button warning outline rounded><GoDatabase/> deals</Button>
        </div>
        <div>
            <Button danger outline > <GoArrowDown/> Hide Adds</Button>
        </div> 
    </div>
  )
}

export default ButtonPage;