import { SemanticSIZES } from "semantic-ui-react";

export interface SplashProps {
    className?: string;
    image?: string;
    size?: SemanticSIZES;
    onLoad?: () => void;
}
