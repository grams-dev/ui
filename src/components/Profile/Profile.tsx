import React from "react";

import { 
    Image,
    Label,
    List
} from 'semantic-ui-react';

import { ProfileProps } from "./Profile.types";


/**
 * Displays a user's profile, including the image, name, and an optional developer label. Note that the Profile component is sugar for `List.Item` and needs to be used within a List based component, for example: `SelectProfile`
 *
 */
const Profile: React.FC<ProfileProps> = ({
    id,
    name,
    developer,
    labelColor = 'green',
    labelSize = 'tiny',
    labelText = '>_',
    image = 'https://assets.grams.dev/img/ui/Profile/default.png',
    size = 'tiny',
    onSelect 
}: ProfileProps) => (
    <List.Item
        data-testid="Profile"
        onClick={() => onSelect(id)}
    >
    <List.Content>
        {developer && (
            <Label color={labelColor} size={labelSize}>{labelText}</Label>
        )}
    </List.Content>
        <Image
            size={size}
            avatar
            src={image}
        />
        <List.Header>{name}</List.Header>
    </List.Item>
);

export default Profile;
