import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavBar: React.FC = () => {
    const navigation = useNavigation();
    
    return (
        <View style={styles.navbar}>
            <View style={styles.navImg}>
                <TouchableOpacity>
                    <Image 
                        source={require('@/assets/images/bean.png')}
                        style={[styles.navImgImg, {width: 90, height: 90}]}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.navItems}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('index')}>
                    <Text style={styles.navText}>Category Detection</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('upscale')}>
                    <Text style={styles.navText}>Image Upscaling</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('about')}>
                    <Text style={styles.navText}>About</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: "15%",
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        overflow: 'visible',
    },
    navItems: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: "70%",
        margin: 50,
        gap: 50
    },
    navItem: {
        padding: 0,
    },
    navText: {
        color: '#fff',
        fontSize: 18,
    },
    navImg: {
        left: 20,
        position: 'relative',
        zIndex: 1,
        overflow: 'visible',
    },
    navImgImg: {
        opacity: 0.9,
        overflow: 'visible',
    }
});

export default NavBar;