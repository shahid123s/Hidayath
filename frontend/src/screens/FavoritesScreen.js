import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
    RefreshControl,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { getFavorites, removeFavorite } from '../services/storage';
import { colors, spacing, borderRadius } from '../theme/colors';

const FavoritesScreen = ({ navigation }) => {
    const [favorites, setFavorites] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    );

    const loadFavorites = async () => {
        const favs = await getFavorites();
        setFavorites(favs.reverse()); // Show newest first
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await loadFavorites();
        setRefreshing(false);
    };

    const handleDelete = (verseId, arabic) => {
        Alert.alert(
            'Remove Favorite',
            'Are you sure you want to remove this verse from favorites?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Remove',
                    style: 'destructive',
                    onPress: async () => {
                        await removeFavorite(verseId);
                        await loadFavorites();
                    },
                },
            ]
        );
    };

    const renderVerseCard = ({ item }) => (
        <TouchableOpacity
            style={styles.card}
            onPress={() =>
                navigation.navigate('Verse', {
                    verse: item,
                    emotion: {
                        id: item.emotion,
                        label: item.emotion.charAt(0).toUpperCase() + item.emotion.slice(1),
                        icon: 'heart-outline',
                        color: colors.emotions[item.emotion] || colors.emeraldGreen,
                    },
                })
            }
        >
            <View style={styles.cardContent}>
                <Text style={styles.arabicPreview} numberOfLines={2}>
                    {item.arabic}
                </Text>
                <Text style={styles.englishPreview} numberOfLines={2}>
                    {item.english}
                </Text>
                <View style={styles.cardFooter}>
                    <View
                        style={[
                            styles.emotionBadge,
                            {
                                backgroundColor: `${colors.emotions[item.emotion] || colors.emeraldGreen
                                    }30`,
                            },
                        ]}
                    >
                        <Text
                            style={[
                                styles.emotionBadgeText,
                                {
                                    color: colors.emotions[item.emotion] || colors.emeraldGreen,
                                },
                            ]}
                        >
                            {item.emotion}
                        </Text>
                    </View>
                    <Text style={styles.reference}>
                        {item.surah} • {item.ayah}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDelete(item._id, item.arabic)}
            >
                <Ionicons name="close-circle" size={28} color={colors.softGray} />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    const EmptyState = () => (
        <View style={styles.emptyContainer}>
            <Ionicons name="bookmark-outline" size={80} color={colors.softGray} />
            <Text style={styles.emptyTitle}>No Saved Verses</Text>
            <Text style={styles.emptyText}>
                Verses you save will appear here for quick access
            </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Saved Verses</Text>
                {favorites.length > 0 && (
                    <Text style={styles.count}>{favorites.length} verses</Text>
                )}
            </View>

            <FlatList
                data={favorites}
                renderItem={renderVerseCard}
                keyExtractor={(item) => item._id}
                contentContainerStyle={
                    favorites.length === 0 ? styles.emptyList : styles.list
                }
                ListEmptyComponent={<EmptyState />}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor={colors.emeraldGreen}
                    />
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.deepNavy,
    },
    header: {
        padding: spacing.xl,
        paddingTop: spacing.xxl,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.warmGold,
    },
    count: {
        fontSize: 16,
        color: colors.softGray,
    },
    list: {
        padding: spacing.lg,
        paddingTop: 0,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
    },
    card: {
        backgroundColor: colors.charcoalBlack,
        borderRadius: borderRadius.lg,
        padding: spacing.lg,
        marginBottom: spacing.md,
        borderWidth: 1,
        borderColor: `${colors.emeraldGreen}20`,
        flexDirection: 'row',
    },
    cardContent: {
        flex: 1,
    },
    arabicPreview: {
        fontSize: 18,
        color: colors.warmGold,
        marginBottom: spacing.sm,
        lineHeight: 28,
    },
    englishPreview: {
        fontSize: 14,
        color: colors.lightGray,
        marginBottom: spacing.md,
        lineHeight: 22,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    emotionBadge: {
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.md,
    },
    emotionBadgeText: {
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'capitalize',
    },
    reference: {
        fontSize: 13,
        color: colors.softGray,
    },
    deleteButton: {
        padding: spacing.sm,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.xxl,
    },
    emptyTitle: {
        fontSize: 22,
        fontWeight: '600',
        color: colors.lightGray,
        marginTop: spacing.lg,
        marginBottom: spacing.sm,
    },
    emptyText: {
        fontSize: 16,
        color: colors.softGray,
        textAlign: 'center',
        lineHeight: 24,
    },
});

export default FavoritesScreen;
