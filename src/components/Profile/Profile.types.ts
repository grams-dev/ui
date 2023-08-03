export interface ProfileProps {
    id?: string;
    name?: string;
    image?: string;
    developer?: boolean;
    onSelect?: (id: string) => void;
}
