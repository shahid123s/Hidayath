import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme/colors';

const EmotionCard = ({ emotion, icon, color, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: `${color}15` }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={[styles.iconContainer, { backgroundColor: `${color}30` }]}>
                <Ionicons name={icon} size={40} color={color} />
            </View>
            <Text style={styles.emotionText}>{emotion}</Text>
            <View style={[styles.glow, { backgroundColor: color, opacity: 0.2 }]} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        aspectRatio: 1,
        margin: spacing.sm,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.md,
    },
    emotionText: {
        color: colors.pureWhite,
        fontSize: 16,
        fontWeight: '600',
        textTransform: 'capitalize',
        textAlign: 'center',
    },
    glow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: borderRadius.lg,
    },
});

export default EmotionCard;
