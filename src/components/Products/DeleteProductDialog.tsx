import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { ReactComponent as RedCircleIcon } from '../../app/assets/icons/icon_circle-close-filled.svg';
import { Close } from '@mui/icons-material';

interface DeleteProductDialogProps {
  open: boolean;
  caption: string;
  question: string;
  handleClose: () => void;
  handlePerform: () => void;
}

const DeleteProductDialog = ({
  open,
  caption,
  question,
  handleClose,
  handlePerform,
}: DeleteProductDialogProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        sx={{
          padding: '64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '24px',
          alignItems: 'center',
        }}
      >
        <RedCircleIcon />
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{ marginBottom: '12px' }}
          >
            {caption}
          </Typography>
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.2 }}
          >
            {question}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
          }}
        >
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ fontSize: '12px' }}
          >
            Ні
          </Button>
          <Button
            variant="contained"
            sx={{ fontSize: '12px' }}
            onClick={handlePerform}
          >
            Так
          </Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: '12px',
            right: '12px',
          }}
        >
          <Close />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteProductDialog;
