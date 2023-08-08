import { SemanticSIZES } from "semantic-ui-react";

export type Method = {
    id: string;
    header: string;
    description?: string;
    image: string;
}

export interface SelectMethodProps {
    basic?: boolean;
    selection?: boolean;
    size?: SemanticSIZES;
    methods?: Method[];
    onSelect?: (id: string) => void;
}
