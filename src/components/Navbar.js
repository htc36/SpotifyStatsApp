import React, { useState } from 'react';
import { Appbar } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header dark={true}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Content title='Spotify Watcher' style={{ paddingLeft: 20 }} />
      {/* <Appbar.Action icon='magnify' onPress={_handleSearch} /> */}
      <Appbar.Action></Appbar.Action>
      {/* <Picker selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
        <Picker.Item label='Java' value='java' />
        <Picker.Item label='JavaScript' value='js' />
      </Picker> */}
    </Appbar.Header>
  );
};

export default Navbar;
