import { Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Avator = ({ session }) => {
  const { user } = session;
  const { image, name } = user;

  const noImage = '';

  return (
    <Box>
      {image !== null ? (
        <Avatar src={image} alt={name} />
      ) : (
        <Avatar src={noImage} alt={name} />
      )}
    </Box>
  );
};

export default Avator;
