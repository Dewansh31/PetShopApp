import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import Colors from '../utils/colors';

interface CustomHeaderProps {
    title: string;
    showBackButton?: boolean;
    onBackPress?: () => void;
    rightIcon?: React.ReactNode;
    onRightPress?: () => void;
    subtitle?: string;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
    title,
    showBackButton = false,
    onBackPress,
    rightIcon,
    onRightPress,
    subtitle,
}) => {
    return (
        <>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    
                    {showBackButton && (
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={onBackPress}
                            activeOpacity={0.7}>
                            <Text style={styles.backIcon}>←</Text>
                        </TouchableOpacity>
                    )}

                    <View style={styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        {subtitle && (
                            <Text style={styles.subtitle} numberOfLines={1}>
                                {subtitle}
                            </Text>
                        )}
                    </View>

                    {rightIcon ? (
                        <TouchableOpacity
                            style={styles.rightButton}
                            onPress={onRightPress}
                            activeOpacity={0.7}>
                            {rightIcon}
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.rightSpacer} />
                    )}
                </View>

                
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.background,
        paddingTop: 12,
        paddingBottom: 16,
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        position: 'relative',
        overflow: 'hidden',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 2,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        fontSize: 24,
        color: Colors.textPrimary,
        fontWeight: '600',
    },
    leftSpacer: {
        width: 40,
    },
    titleContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginHorizontal: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: Colors.textPrimary,
        textAlign: 'left',
        letterSpacing: 0.5,
    },
    subtitle: {
        fontSize: 12,
        color: 'rgba(255, 255, 255, 0.85)',
        marginTop: 2,
        textAlign: 'left',
    },
    rightButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightSpacer: {
        width: 40,
    },
    pawContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    pawPrint: {
        position: 'absolute',
        fontSize: 18,
        opacity: 0.15,
    },
    pawPrint2: {
        top: 10,
        right: 40,
        transform: [{ rotate: '25deg' }],
    },
    pawPrint3: {
        bottom: 5,
        left: 30,
        transform: [{ rotate: '-15deg' }],
    },
});
