import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Alert,
    Share,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { saveFavorite, isFavorited } from '../services/storage';
import { colors, spacing, borderRadius } from '../theme/colors';

const VerseScreen = ({ route, navigation }) => {
    const { verse, emotion } = route.params;
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        checkIfFavorited();
    }, []);

    const checkIfFavorited = async () => {
        const favorited = await isFavorited(verse._id);
        setIsFav(favorited);
    };

    const handleSaveFavorite = async () => {
        if (isFav) {
            Alert.alert('Already Saved', 'This verse is already in your favorites');
            return;
        }

        const success = await saveFavorite(verse);
        if (success) {
            setIsFav(true);
            Alert.alert('Saved!', 'Verse added to your favorites');
        } else {
            Alert.alert('Error', 'Could not save verse');
        }
    };

    const handleShare = async () => {
        try {
            await Share.share({
                message: `${verse.arabic}\n\n${verse.english}\n\n— ${verse.surah} ${verse.ayah}`,
            });
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Header with emotion tag */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back" size={24} color={colors.pureWhite} />
                    </TouchableOpacity>

                    <View
                        style={[
                            styles.emotionTag,
                            { backgroundColor: `${emotion.color}30` },
                        ]}
                    >
                        <Ionicons name={emotion.icon} size={20} color={emotion.color} />
                        <Text style={[styles.emotionText, { color: emotion.color }]}>
                            {emotion.label}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.favoriteButton}
                        onPress={handleSaveFavorite}
                    >
                        <Ionicons
                            name={isFav ? 'heart' : 'heart-outline'}
                            size={28}
                            color={isFav ? colors.gold : colors.lightGray}
                        />
                    </TouchableOpacity>
                </View>

                {/* Verse content */}
                <View style={styles.verseContainer}>
                    {/* Arabic text */}
                    <Text style={styles.arabicText}>{verse.arabic}</Text>

                    {/* Decorative separator */}
                    <View style={styles.separator}>
                        <View style={styles.separatorLine} />
                        <Ionicons name="star" size={16} color={colors.softTeal} />
                        <View style={styles.separatorLine} />
                    </View>

                    {/* English translation */}
                    <Text style={styles.englishText}>{verse.english}</Text>

                    {/* Reference */}
                    <View style={styles.referenceContainer}>
                        <Ionicons
                            name="book-outline"
                            size={18}
                            color={colors.warmGold}
                        />
                        <Text style={styles.referenceText}>
                            {verse.surah} • {verse.ayah}
                        </Text>
                    </View>

                    {/* Share button */}
                    <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
                        <Ionicons name="share-outline" size={20} color={colors.pureWhite} />
                        <Text style={styles.shareText}>Share this verse</Text>
                    </TouchableOpacity>
                </View>

                {/* Crescent moon decoration */}
                <View style={styles.decoration}>
                    <Ionicons name="moon-outline" size={80} color={colors.softTeal} opacity={0.1} />
                </View>
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
        paddingBottom: spacing.xxl,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: spacing.lg,
        paddingTop: spacing.xxl,
    },
    backButton: {
        padding: spacing.sm,
    },
    emotionTag: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderRadius: borderRadius.xl,
        gap: spacing.sm,
    },
    emotionText: {
        fontSize: 16,
        fontWeight: '600',
    },
    favoriteButton: {
        padding: spacing.sm,
    },
    verseContainer: {
        padding: spacing.xl,
        margin: spacing.lg,
        backgroundColor: colors.charcoalBlack,
        borderRadius: borderRadius.xxl,
        borderWidth: 1,
        borderColor: `${colors.emeraldGreen}20`,
    },
    arabicText: {
        fontSize: 28,
        lineHeight: 50,
        color: colors.warmGold,
        textAlign: 'center',
        fontWeight: '400',
        marginBottom: spacing.lg,
    },
    separator: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: spacing.lg,
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.softTeal,
        opacity: 0.3,
    },
    englishText: {
        fontSize: 18,
        lineHeight: 32,
        color: colors.pureWhite,
        textAlign: 'center',
        fontWeight: '300',
        marginBottom: spacing.lg,
    },
    referenceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: spacing.sm,
        marginTop: spacing.md,
    },
    referenceText: {
        fontSize: 15,
        color: colors.warmGold,
        fontWeight: '500',
    },
    shareButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.emeraldGreen,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderRadius: borderRadius.lg,
        marginTop: spacing.xl,
        gap: spacing.sm,
    },
    shareText: {
        color: colors.pureWhite,
        fontSize: 16,
        fontWeight: '600',
    },
    decoration: {
        position: 'absolute',
        bottom: spacing.xxl,
        alignSelf: 'center',
        zIndex: -1,
    },
});

export default VerseScreen;
