import logo from './logo.svg';
import './App.css';
import { selectionDetails } from './util';
import {useState} from 'react';

function App() {
  const [selectedSeletion,setSelectedSeletion]=useState(null);

  const handleSlection=(id)=>{
    if(id==selectedSeletion){
      setSelectedSeletion(null);
      return;
    }
    setSelectedSeletion(id);

  }

  return (
    <div className="mainselection">
     <div className='selection'>
       {
        selectionDetails ? selectionDetails?.map((item, index) => (
          <div key={item.id}>
            <div onClick={()=>handleSlection(item?.id)} className='card'>
              <span>{item?.title}</span>
              <span>+</span>
               {
             selectedSeletion == item.id &&  <div className='openSelection'>
                <p>{item?.description}</p>
              </div>
             }
            </div>
          </div>
        )): null}
     </div>
    </div>
  );
}

export default App;
