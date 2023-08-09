import { ProfileProps } from "../../components/Profile/Profile.types";

export interface SelectProfileProps {
    className?: string;
    profiles?: ProfileProps[];
    horizontal?: boolean;
    createNew?: boolean;
    newImage?: string;
    onSelect?: (id: string) => void;
    onCreate?: () => void;
}
