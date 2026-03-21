import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export interface ElectionDetail {
    id: string;
    state: string;
    phases: string;
    date: string;
    result: string;
    status: 'LIVE' | 'UPCOMING';
}

const ElectionRow = ({ item }: { item: ElectionDetail }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.card}>
            <View style={styles.leftSection}>
                <View style={styles.stateRow}>
                    <View style={styles.liveDot} />
                    <Text style={styles.stateName}>{item.state}</Text>
                </View>
                <Text style={styles.subText}>{item.phases} • {item.date}</Text>
            </View>

            <View style={styles.rightSection}>
                <Text style={styles.resultLabel}>परिणाम</Text>
                <Text style={styles.resultDate}>{item.result}</Text>
            </View>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.status}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#f0f0f0',
        // Soft shadow for depth
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
    },
    leftSection: {
        justifyContent: 'center',
    },
    stateRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    liveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D32F2F',
        marginRight: 8,
    },
    stateName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
    },
    subText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#383838',
        marginLeft: 16,
    },
    rightSection: {
        alignItems: 'flex-start',
    },
    resultLabel: {
        fontSize: 16,
        paddingBottom: 4,
        color: '#999',
        textTransform: 'uppercase',
    },
    resultDate: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#D32F2F',
        marginBottom: 4,
    },
    badge: {
        // backgroundColor: '#FFF5F5',
        paddingHorizontal: 10,
        paddingVertical: 2,
        // borderRadius: 20,
        // borderWidth: 1,
        // borderColor: '#FFEBEE',
    },
    badgeText: {
        color: '#D32F2F',
        fontSize: 10,
        fontWeight: 'bold',
    },
});

export default ElectionRow;