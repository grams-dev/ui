import { SemanticSIZES } from "semantic-ui-react";

export interface ViewSeedProps {
    basic?: boolean;
    columns?: number;
    rows?: number;
    seed: string;
    size?: SemanticSIZES;
    onConfirm?: () => void;
    onCopy?: (seed: string) => void;
}
