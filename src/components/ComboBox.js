import React, { useState } from 'react';
import { Appbar, Text } from 'react-native-paper';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// const ComboBox = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('java');
//   return (
//     <View>
//       <Picker style={{ color: 'white' }} selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
//         <Picker.Item label='Java' value='java' />
//         <Picker.Item label='JavaScript' value='js' />
//       </Picker>
//     </View>
//   );
// };
// export default ComboBox;

import RNPickerSelect from 'react-native-picker-select';

const ComboBox = () => {
  const [selected, setSelected] = useState('football');
  return (
    <>
      <Text style={{ color: 'white' }}>Incremenet</Text>
      <View style={{ backgroundColor: 'white', borderRadius: 5, width: '50%' }}>
        <RNPickerSelect
          onValueChange={(value) => setSelected(value)}
          value={selected}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
        />
      </View>
      <Text style={{ color: 'white' }}>Incremenet</Text>
      <View style={{ backgroundColor: 'white', borderRadius: 5, width: '50%' }}>
        <RNPickerSelect
          onValueChange={(value) => setSelected(value)}
          value={selected}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
        />
      </View>
    </>
  );
};

export default ComboBox;
