import React, {useState} from 'react';
import {StyleSheet, View, Button, Platform,  Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';


const DatePickerExpo = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.card}>
        <View style={styles.timeStamp}>
           <Text style={styles.text}>{date.toDateString()}</Text>
           <Text style={styles.text}>{date.toLocaleTimeString().substring(0,5)}</Text>
        </View>
        <View style={styles.btnContainer}>
        
      <View style={styles.date}>
        <Button style={styles.text} onPress={() => (setMode("date"), setShow(true))} title="Show date picker!" />
      </View>
      <View style={styles.time}>
        <Button style={styles.text} onPress={() => (setMode("time"), setShow(true))} title="Show time picker!" />
      </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{width: 320, height: 300, backgroundColor: "white"}}
        />
      )}
      {show ? <View>
        <Button onPress={() => setShow(false)} title="Close Picker" />
      </View> : null}
    </View>
  );
  
};

const styles = StyleSheet.create({
    card:{
        height: '100%',
        alignItems: 'center',
     justifyContent: 'space-evenly',
     
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date:{
        margin: 20,
    },
    time:{
        margin: 20,
    }, text: {
      fontFamily: 'BalsamiqSans_400Regular'
    }
     });


export default DatePickerExpo;