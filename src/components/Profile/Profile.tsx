import React from "react";

import { 
    Image,
    Label,
    List
} from 'semantic-ui-react';

import { ProfileProps } from "./Profile.types";

import "./Profile.css";

/**
 * Displays a user's profile, including the image, name, and an optional developer label.
 *
 */
const Profile: React.FC<ProfileProps> = ({ id, name, developer, image, onSelect }: ProfileProps) => (
    <List.Item
        data-testid="Profile"
        className="profile-component"
        key={name} 
        onClick={() => onSelect(id)}
    >
    <List.Content>
        {developer && (
            <Label color="grey" size="mini">DEV</Label>
        )}
    </List.Content>
        <Image
            size='tiny'
            avatar
            src={ image || "https://assets.grams.dev/img/SelectProfile/default.png" }
        />
        <List.Header>{name}</List.Header>
    </List.Item>
);

export default Profile;
