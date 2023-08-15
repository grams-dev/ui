import { ReactNode } from "react";

/**
 * GramsMenu props
 */
export interface GramsMenuProps {
    active?: string;
    setActive?: (value: string) => void;
    developer?: boolean;
    sideBar?: ReactNode;
    developerBar?: ReactNode;
    optionsBar?: ReactNode;
}
