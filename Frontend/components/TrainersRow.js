import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { client } from "../sanity";
import TrainerCard from "./TrainerCard";


const TrainersRow = ({  }) => {
  const [trainers, setTrainers] = useState([]);
  
  useEffect(() => {
    client.fetch(`*[_type=="trainer"]{...,class[]->{...,type[]->}}`).then((data) => {
      setTrainers(data);
    });
  }, []);
  
 
  return (
    <View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Trainer Cards  */}
       
        {trainers?.map(trainer => (
          <TrainerCard
          key={trainer._id}
            id={trainer._id}
            imgUrl={trainer.image}
            title={trainer.name}
            rating={trainer.rating}
            shortDescription="hello"
            slots={trainer.class}
           experience="12 years"
          />
        
        ))}
      </ScrollView>
    </View>
  );
};

export default TrainersRow;
