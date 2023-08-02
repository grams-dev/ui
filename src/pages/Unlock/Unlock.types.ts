export interface UnlockProps {
    name?: string;
    image?: string;
    method?: 'pin' | 'password';
    rule?: RegExp;
    onUnlock?: (credential: string) => void;
}
