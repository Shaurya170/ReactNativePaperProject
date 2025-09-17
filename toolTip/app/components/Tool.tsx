import * as React from 'react';
import { IconButton, Provider as PaperProvider, Tooltip } from 'react-native-paper';

const Tool = () => (
  <Tooltip title="hello" >
    <IconButton icon="camera" selected size={24} onPress={() => {}} />
  </Tooltip>
);

const ToolWithProvider = () => (
  <PaperProvider>
    <Tool />
  </PaperProvider>
);


export default ToolWithProvider;