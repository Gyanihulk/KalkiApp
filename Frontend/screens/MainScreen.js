import React, { useState ,useEffect} from 'react'

import { Text } from 'react-native'
import { client } from '../sanity';


const MainScreen = () => {
  const [trainers,setTrainer]=useState([])
  useEffect(() => {
    client
      .fetch(
        `*[_type=="trainer"]`
      )
      .then((data) => {
        setTrainer(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
 console.log(trainers)
  return (
    <Text>

            Fitness Club
        
    </Text>
    
  )
}

export default MainScreen