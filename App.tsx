import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox, { requestAndroidLocationPermissions } from '@rnmapbox/maps';

Mapbox.setAccessToken('<YOUR_ACCESSTOKEN>');

const App = () => {
  const [haveLocationPermission, setHaveLocationPermission] = useState(false);

  useEffect(() => {
    requestAndroidLocationPermissions().then((havePermission) => setHaveLocationPermission(havePermission));
  }, []);

  const onLocationUpdate = (location: Mapbox.Location) => {
    console.log('MAPBOX-LOCATION:', location);
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          {haveLocationPermission && <Mapbox.UserLocation visible={true} minDisplacement={0} onUpdate={onLocationUpdate} />}
        </Mapbox.MapView>
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});
