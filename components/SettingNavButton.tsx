import { StyleSheet, Text, View, Pressable, ActivityIndicator } from 'react-native'
import React from 'react'


const SettingNavButton = ({
    onPress,
    title,
    unstable_pressDelay,
    isDisabled = false,
    Icon,
    isLoading = false,
    style,
    accessibilityHint,
    accessibilityLabel,
}: SettingNavButtonProps) => {
  return (
    <Pressable 
            onPress={onPress} 
            unstable_pressDelay={unstable_pressDelay}
            disabled={isDisabled || isLoading} 
            hitSlop={16}
            style={style} 
            accessibilityHint={accessibilityHint}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole='button'
            accessibilityState={{
                busy: isLoading,
                disabled: isDisabled || isLoading,
            }}>
                {({ pressed }) => (
                    <View style={[
                        styles.container,
                        {
                            backgroundColor: pressed ? "rgb(39, 174, 96)" : "rgb(46,204,113)",
                            opacity: isDisabled ? 0.5 : 1,
                        }]}>
                        {isLoading ? (
                            <ActivityIndicator color="white" size={18} />
                        ) : (
                            <>
                                {Icon}
                                <Text numberOfLines={1} style={styles.title}>
                                    {title}
                                </Text>
                            </>
                        )}
                    </View>
                )}
            </Pressable>
  )
}


export default SettingNavButton

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 8,
        flexDirection: "row",
        gap: 8,
        height: 42,
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 8,
    },
    title: {
        color: "black",
        flexShrink: 1,
        fontSize: 18,
        fontWeight: "600",
    },
})