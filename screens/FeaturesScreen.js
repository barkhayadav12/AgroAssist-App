import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const FeaturesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Explore Features</Text>
      </View>
      
      <TouchableOpacity style={[styles.featureBox, styles.firstFeatureBox]}>
        <Ionicons name="leaf" size={40} color="green" style={styles.icon} />
        <Text style={styles.featureText}>Crop Recommendation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureBox}>
        <Ionicons name="bug" size={40} color="green" style={styles.icon} />
        <Text style={styles.featureText}>Disease Detection</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.featureBox}>
        <Ionicons name="flask" size={40} color="green" style={styles.icon} />
        <Text style={styles.featureText}>Fertilizer Recommendation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  header: {
    width: '100%',
    backgroundColor: 'green',
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  featureBox: {
    width: width * 0.92,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignSelf: 'center',
    marginLeft: 10, // Moves the box slightly to the right
  },
  firstFeatureBox: {
    marginTop: 20, // Moves the first feature container downward
  },
  featureText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  icon: {
    marginRight: 15,
  }
});

export default FeaturesScreen;