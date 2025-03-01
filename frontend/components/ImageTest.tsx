import { Image } from "react-native";

type ImageTestProps = {
    source: string;
};

export default function ImageTest( props : ImageTestProps ) {
    return (
        <Image
            source={require(props.source)}
            style={{ width: 200, height: 200 }}
        />
    );
}