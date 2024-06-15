import {useState} from "react";
import { useSWRConfig } from "swr";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function OutlinedCard() {
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const { mutate } = useSWRConfig();
  const save = () => {
    const url = `${sessionStorage.getItem('apiUrlEndpoint') || 'http://localhost:3000'}/todo`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: text
      })
    }).then(() =>{
      setText('')
      setTitle('')
      mutate(url).then()
    }).catch((e) => console.error(e))
  }


  return (
        <Card
            variant="outlined"
            sx={{
              minWidth: '60%',
              marginBottom: '2rem',
            }}
        >
          <CardContent>
            <TextField
                multiline
                variant="standard"
                fullWidth
                minRows={1}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label='タイトル'
            />
            <TextField
                multiline
                variant="standard"
                fullWidth
                maxRows={10}
                minRows={3}
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
          </CardContent>
          <CardActions
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
          >
            <Button
                size="small"
                onClick={save}
            >保存</Button>
          </CardActions>
        </Card>
  );
}
