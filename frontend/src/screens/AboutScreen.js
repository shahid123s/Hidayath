import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, borderRadius } from '../theme/colors';

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Ionicons name="moon" size={60} color={colors.warmGold} />
                    <Text style={styles.title}>Hidayath</Text>
                    <Text style={styles.version}>Version 1.0.0</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About This App</Text>
                    <Text style={styles.description}>
                        Hidayath is your spiritual companion, offering comfort and guidance
                        through the beautiful verses of the Holy Quran. Select your current
                        emotion and receive relevant verses to find peace and clarity.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>How It Works</Text>
                    <View style={styles.stepContainer}>
                        <View style={styles.step}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepNumberText}>1</Text>
                            </View>
                            <Text style={styles.stepText}>
                                Choose how you're feeling from the emotion cards
                            </Text>
                        </View>
                        <View style={styles.step}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepNumberText}>2</Text>
                            </View>
                            <Text style={styles.stepText}>
                                Receive a carefully selected Quran verse with translation
                            </Text>
                        </View>
                        <View style={styles.step}>
                            <View style={styles.stepNumber}>
                                <Text style={styles.stepNumberText}>3</Text>
                            </View>
                            <Text style={styles.stepText}>
                                Save your favorite verses for daily reflection
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Features</Text>
                    <View style={styles.featureList}>
                        <View style={styles.feature}>
                            <Ionicons name="heart" size={20} color={colors.emeraldGreen} />
                            <Text style={styles.featureText}>
                                Emotion-based verse selection
                            </Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="language" size={20} color={colors.emeraldGreen} />
                            <Text style={styles.featureText}>
                                Arabic text with English translation
                            </Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="bookmark" size={20} color={colors.emeraldGreen} />
                            <Text style={styles.featureText}>Save favorite verses</Text>
                        </View>
                        <View style={styles.feature}>
                            <Ionicons name="share-social" size={20} color={colors.emeraldGreen} />
                            <Text style={styles.featureText}>Share verses with others</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Islamic Disclaimer</Text>
                    <Text style={styles.disclaimer}>
                        This app provides Quran verses as emotional support and guidance.
                        For complete understanding and context, please consult the full
                        Quran and seek knowledge from qualified Islamic scholars.
                    </Text>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        Made with ❤️ for spiritual wellbeing
                    </Text>
                    <Text style={styles.footerSubtext}>
                        May Allah guide us all to the straight path
                    </Text>
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
        alignItems: 'center',
        padding: spacing.xl,
        paddingTop: spacing.xxl,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: colors.warmGold,
        marginTop: spacing.md,
    },
    version: {
        fontSize: 14,
        color: colors.softGray,
        marginTop: spacing.xs,
    },
    section: {
        padding: spacing.lg,
        marginHorizontal: spacing.lg,
        marginBottom: spacing.md,
        backgroundColor: colors.charcoalBlack,
        borderRadius: borderRadius.lg,
        borderWidth: 1,
        borderColor: `${colors.emeraldGreen}20`,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: colors.warmGold,
        marginBottom: spacing.md,
    },
    description: {
        fontSize: 16,
        color: colors.lightGray,
        lineHeight: 26,
    },
    stepContainer: {
        gap: spacing.md,
    },
    step: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },
    stepNumber: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.emeraldGreen,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepNumberText: {
        color: colors.pureWhite,
        fontSize: 16,
        fontWeight: '700',
    },
    stepText: {
        flex: 1,
        fontSize: 15,
        color: colors.lightGray,
        lineHeight: 22,
    },
    featureList: {
        gap: spacing.md,
    },
    feature: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.md,
    },
    featureText: {
        fontSize: 15,
        color: colors.lightGray,
    },
    disclaimer: {
        fontSize: 14,
        color: colors.softGray,
        lineHeight: 22,
        fontStyle: 'italic',
    },
    footer: {
        alignItems: 'center',
        padding: spacing.xl,
    },
    footerText: {
        fontSize: 16,
        color: colors.lightGray,
        marginBottom: spacing.sm,
    },
    footerSubtext: {
        fontSize: 14,
        color: colors.softGray,
        fontStyle: 'italic',
    },
});

export default AboutScreen;
