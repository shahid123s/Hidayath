import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/colors';

const { width } = Dimensions.get('window');

const LoadingShimmer = () => {
    const shimmerAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(shimmerAnim, {
                    toValue: 1,
                    duration: 1500,
                    useNativeDriver: true,
                }),
                Animated.timing(shimmerAnim, {
                    toValue: 0,
                    duration: 1500,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [shimmerAnim]);

    const opacity = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0.3, 0.7],
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.shimmer, { opacity }]} />
            <Animated.View style={[styles.line, { opacity }]} />
            <Animated.View style={[styles.line, { opacity, width: width * 0.7 }]} />
            <Animated.View style={[styles.line, { opacity, width: width * 0.5 }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: spacing.xl,
        alignItems: 'center',
    },
    shimmer: {
        width: width * 0.8,
        height: 120,
        backgroundColor: colors.charcoalBlack,
        borderRadius: borderRadius.lg,
        marginBottom: spacing.lg,
    },
    line: {
        width: width * 0.8,
        height: 20,
        backgroundColor: colors.charcoalBlack,
        borderRadius: borderRadius.sm,
        marginBottom: spacing.md,
    },
});

export default LoadingShimmer;
