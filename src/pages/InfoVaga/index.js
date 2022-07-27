import React, {useEffect, useState} from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Info from '../../components/DetalhesVaga'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function InfoVaga() {

  const {vagaId} = useParams();
  const [info, setInfo] = useState();
  console.log(useParams())
  async function handleData(){
    await axios.get(`http://localhost:3004/posts?id=${vagaId}`)
    .then(res => setInfo(res.data[0]) )
   
    
  }

  useEffect(() => {
   
    
    handleData();
  
  }, [])
  
  return (
    <>
      <Navbar />
      <Info info={info} />
      <Footer />
    </>
  );
}

export default InfoVaga;