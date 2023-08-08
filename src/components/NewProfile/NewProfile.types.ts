import { ProfileProps } from "../Profile/Profile.types";

export type NewProfileRequest = {
    profile: ProfileProps;
    password: string;
    pin: number;
}

export interface NewProfileProps {
    className?: string;
    basic?: boolean;
    advanced?: boolean;
    fluid?: boolean;
    title?: string;
    description?: string;
    onCreate?: (request: NewProfileRequest) => void;
}
