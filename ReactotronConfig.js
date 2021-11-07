import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {noop} from 'lodash';

if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  Reactotron.configure({name: 'Food X', host: scriptHostname})
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .connect();
  console.tron = Reactotron;
} else {
  const ouroboros = () => console.tron;
  console.tron = {
    startTimer: () => noop,
    send: noop,
    apiResponse: noop,
    debug: noop,
    stateActionComplete: noop,
    stateValuesResponse: noop,
    stateKeysResponse: noop,
    stateValuesChange: noop,
    stateBackupResponse: noop,
    repl: noop,
    warn: noop,
    configure: ouroboros,
    connect: ouroboros,
    use: ouroboros,
    useReactNative: ouroboros,
    close: noop,
    clear: noop,
    log: noop,
    logImportant: noop,
    display: noop,
    error: noop,
    image: noop,
    reportError: noop,
    benchmark: name => ({step: noop, stop: noop}),
    onCustomCommand: noop,
  };
}
