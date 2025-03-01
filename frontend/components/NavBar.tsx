import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const NavBar: React.FC = () => {
    return (
        <View style={styles.navbar}>
            <div style={styles.navImg}>
                <TouchableOpacity>
                    <Image 
                        source={require('@/assets/images/bean.png')}
                        style={styles.navImgImg}
                    />
                </TouchableOpacity>
            </div>
            <div style={styles.navItems}>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <Text style={styles.navText}>Contact</Text>
                </TouchableOpacity>
            </div>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
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
        padding: 10,
    },
    navText: {
        color: '#fff',
        fontSize: 18,
    },
    navImg: {
        margin: 20,
        position: 'relative',
        zIndex: 1,
    },
    navImgImg: {
        height: 60,
        width: 60,
    }
});

export default NavBar;