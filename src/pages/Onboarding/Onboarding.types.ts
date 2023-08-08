import { SemanticSIZES } from "semantic-ui-react";
import { Method } from "../../components/SelectMethod/SelectMethod.types";

export interface OnboardingProps {
    className?: string;
    basic?: boolean;
    size?: SemanticSIZES;
    methods?: Method[];
}
