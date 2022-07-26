import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Typography as Text } from '@mui/material';

const BlogPost : FC = () => {
    const { param1, param2 } = useParams();
    return <Text variant='h2'>{param1} {param2}</Text>;
}

export { BlogPost }