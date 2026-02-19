import { Ionicons } from '@expo/vector-icons';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NewsContext } from '@/components/context/NewsContext';

export default function ArticleScreen() {
    const { id } = useLocalSearchParams();
    const context = useContext(NewsContext);
    const router = useRouter();
    console.log('context',context);

    interface contextType{
        news: {
            id: string;
            category: string;
            source: string;
            title: string;
            snippet: string;
            image: string;
        }[]
    }
    interface NewsType {
        id: string;
        category: string;
        source: string;
        title: string;
        snippet: string;
        image: string;
    }
    

    // Find the specific article and filter out the rest for the "Related" section
    const article = (context as contextType)?.news?.find((item: NewsType) => item.id === id);
    const relatedArticles = (context as contextType)?.news?.filter((item: NewsType) => item.id !== id);

    // Safety check if the article isn't found
    if (!article) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                    <Text style={styles.backText}>Back to Feed</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Article not found.</Text>
            </View>
        );
    }

  
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/* Top Bar */}
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="white" />
                <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            {/* Hero Image */}
            <Image source={{ uri: article.image }} style={styles.heroImage} />

            {/* Meta Row (Category & Source) */}
            <View style={styles.metaRow}>
                <Text style={styles.categoryText}>{article.category}</Text>
                <Text style={styles.sourceText}>  |  {article.source}</Text>
            </View>

            {/* Main Content */}
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.body}>{article.snippet}</Text>

            {/* --- RELATED ARTICLES SECTION --- */}
            {relatedArticles && relatedArticles.length > 0 && (
                <View style={styles.relatedSection}>
                    <Text style={styles.relatedTitle}>Related Articles</Text>

                    {relatedArticles.map((item: any) => (
                        <Link href={`/article/${item.id}`} asChild key={item.id}>
                            <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                                
                                <View style={styles.cardText}>
                                    <View style={styles.metaRow}>
                                        <Text style={styles.categoryText}>{item.category}</Text>
                                        <Text style={styles.sourceText}>  |  {item.source}</Text>
                                    </View>
                                    <Text style={styles.cardTitle} numberOfLines={2}>
                                        {item.title}
                                    </Text>
                                </View>

                                <Image source={{ uri: item.image }} style={styles.cardThumbnail} />

                            </TouchableOpacity>
                        </Link>
                    ))}
                </View>
            )}

            {/* Bottom Padding */}
            <View style={{ height: 40 }} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B1021',
        paddingTop: 50, 
        paddingHorizontal: 20,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 8,
    },
    heroImage: {
        width: '100%',
        height: 220, 
        borderRadius: 12, 
        marginBottom: 20,
    },
    metaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryText: {
        color: '#E53935',
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    sourceText: {
        color: '#8A94A6',
        fontSize: 12,
    },
    title: {
        color: 'white',
        fontSize: 24, 
        fontWeight: 'bold', 
        lineHeight: 32,
        marginBottom: 16,
    },
    body: {
        color: '#D1D5DB', 
        fontSize: 16, 
        lineHeight: 26,
        marginBottom: 20,
    },
    
    // Related Articles Styles
    relatedSection: {
        marginTop: 20,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#1E253A', 
    },
    relatedTitle: {
        color: 'white', 
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#151A2C', 
        borderRadius: 12,
        padding: 16, 
        marginBottom: 16,
    },
    cardText: {
        flex: 1,
        marginRight: 16,
    },
    cardTitle: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 22,
    },
    cardThumbnail: {
        width: 70, 
        height: 70,
        borderRadius: 8,
        backgroundColor: '#1E253A',
    },
});