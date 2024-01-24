
import React, { useState, useEffect } from 'react';
import { View, Text, ProgressBar, ActivityIndicator, Platform } from 'react-native';

const DashboardScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View>
      {loading ? (
        Platform.OS === 'android' ? (
          <ProgressBar styleAttr="Horizontal" color="#2196F3" />
        ) : (
          <ActivityIndicator size="large" color="#2196F3" />
        )
      ) : (
        <View>
          <Text>Welcome</Text>
        </View>
      )}
    </View>
  );
};

export default DashboardScreen;
