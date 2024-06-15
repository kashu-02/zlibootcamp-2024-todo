import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export interface SettingsProps {
  open: boolean;
  onClose: () => void;
}

export default function Settings(props: SettingsProps) {
  const {open, onClose} = props;

  const handleClose = () => {
    onClose();
  };

  return (
      <>
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: 'form',
              onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                const formJson = Object.fromEntries((formData as any).entries());
                const url = formJson.url;
                sessionStorage.setItem('apiUrlEndpoint', url);
                handleClose();
              },
            }}
        >
          <DialogTitle>APIエンドポイント設定</DialogTitle>
          <DialogContent>
            <TextField
                autoFocus
                required
                margin="dense"
                id="url"
                name="url"
                label="URL"
                type="url"
                fullWidth
                variant="standard"
                defaultValue={sessionStorage.getItem('apiUrlEndpoint') || 'http://localhost:3000'}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>キャンセル</Button>
            <Button type="submit">保存</Button>
          </DialogActions>
        </Dialog>
      </>
  );
}
