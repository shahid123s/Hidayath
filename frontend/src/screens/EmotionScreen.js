import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert,
    ActivityIndicator,
} from 'react-native';
import EmotionCard from '../components/EmotionCard';
import { getVerseByEmotion } from '../services/api';
import { colors, spacing } from '../theme/colors';

const emotions = [
    { id: 'happy', label: 'Happy', icon: 'happy-outline', color: colors.emotions.happy },
    { id: 'sad', label: 'Sad', icon: 'sad-outline', color: colors.emotions.sad },
    { id: 'angry', label: 'Angry', icon: 'flame-outline', color: colors.emotions.angry },
    { id: 'anxious', label: 'Anxious', icon: 'alert-circle-outline', color: colors.emotions.anxious },
    { id: 'stressed', label: 'Stressed', icon: 'pulse-outline', color: colors.emotions.stressed },
    { id: 'depressed', label: 'Depressed', icon: 'cloud-outline', color: colors.emotions.depressed },
    { id: 'confused', label: 'Confused', icon: 'help-circle-outline', color: colors.emotions.confused },
];

const EmotionScreen = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const handleEmotionPress = async (emotion) => {
        setLoading(true);
        try {
            const response = await getVerseByEmotion(emotion.id);

            if (response.success && response.data) {
                navigation.navigate('Verse', {
                    verse: response.data,
                    emotion: emotion,
                });
            } else {
                Alert.alert('Error', 'No verse found for this emotion');
            }
        } catch (error) {
            Alert.alert(
                'Error',
                'Could not fetch verse. Please check your connection and try again.'
            );
            console.error('Error fetching verse:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.deepNavy} />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Hidayath</Text>
                    <Text style={styles.subtitle}>How are you feeling today?</Text>
                </View>

                <View style={styles.emotionsGrid}>
                    {emotions.map((emotion) => (
                        <View key={emotion.id} style={styles.cardWrapper}>
                            <EmotionCard
                                emotion={emotion.label}
                                icon={emotion.icon}
                                color={emotion.color}
                                onPress={() => handleEmotionPress(emotion)}
                            />
                        </View>
                    ))}
                </View>

                {loading && (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color={colors.emeraldGreen} />
                        <Text style={styles.loadingText}>Finding guidance...</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.deepNavy,
    },
    scrollContent: {
        paddingBottom: spacing.xl,
    },
    header: {
        padding: spacing.xl,
        paddingTop: spacing.xxl,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: colors.warmGold,
        marginBottom: spacing.sm,
    },
    subtitle: {
        fontSize: 18,
        color: colors.lightGray,
        fontWeight: '400',
    },
    emotionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: spacing.md,
        justifyContent: 'center',
    },
    cardWrapper: {
        width: '45%',
    },
    loadingContainer: {
        alignItems: 'center',
        marginTop: spacing.xl,
    },
    loadingText: {
        color: colors.lightGray,
        marginTop: spacing.md,
        fontSize: 16,
    },
});

export default EmotionScreen;
