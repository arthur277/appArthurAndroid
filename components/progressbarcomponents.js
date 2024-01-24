import * as React from 'react';
import { useState } from 'react'; // Import useState from react
import { ProgressBar, MD3Colors, Button } from 'react-native-paper';

const ProgressComponent = () => {
  const [count, setCount] = useState(0);

  const Coundown = () => {
   var c = 0

   setInterval(() => {
    c = count + 0.1
    console.log(c)
    setCount(c)
   }, 10000)
  };

  return (
    <>
      <ProgressBar progress={count} color={MD3Colors.primary50} />
      <Button
        style={{
          marginTop: '5%',
        }}
        icon="camera"
        mode="contained"
        onPress={Coundown}
      >
        Press me
      </Button>
    </>
  );
};

export default ProgressComponent;