import { ImageProps, NativeModules } from 'react-native';
import React from 'react';

export interface LoadingAnimationProps extends ImageProps {
    loading: boolean;
}

export const SplashImage = (props: LoadingAnimationProps): React.ReactElement => {
    if (!props.loading) {
        NativeModules.SplashScreen.close({
            animationType: 2,
            duration: 500,
        });
    }
    return <></>;
};
