import { Image } from "expo-image";

export default function ImageTest() {
    return (
        <Image
            source={require('@/assets/images/icon.png')}
            style={{ width: 200, height: 200 }}
        />
    );
}