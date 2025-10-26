interface CustomButtonProps{
    onPress: () => void;
    title: string; 
    isDisabled?: boolean;    
    Icon?: React.ReactElement;
    isLoading?: boolean;
    accessibilityHint?: string;
    accessibilityLabel?: string;
    style?: ViewStyle | ViewStyle[];
}

