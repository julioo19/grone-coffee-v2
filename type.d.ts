interface CustomButtonProps {
    onPress: () => void;
    title: string;
    isDisabled?: boolean;
    Icon?: React.ReactElement;
    isLoading?: boolean;
    accessibilityHint?: string;
    accessibilityLabel?: string;
    style?: ViewStyle | ViewStyle[];
}

interface SettingNavButtonProps {
    onPress: () => void;
    title: string;
    unstable_pressDelay: number;
    isDisabled?: boolean;
    Icon?: React.ReactElement;
    isLoading?: boolean;
    accessibilityHint?: string;
    accessibilityLabel?: string;
    style?: ViewStyle | ViewStyle[];
}