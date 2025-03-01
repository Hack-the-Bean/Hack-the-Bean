import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavBar: React.FC = () => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Text style={styles.navText}>Contact</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        backgroundColor: '#333',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navItem: {
        padding: 10,
    },
    navText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default NavBar;