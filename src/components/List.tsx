import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import {useSWRConfig} from "swr";

type Props = {
  post: {
    id: number;
    description: string;
    isDone: boolean;
  }
}
export default function List(props: Props) {
  const id = props.post.id
  const markAsDone = () => {
    const { mutate } = useSWRConfig();
    const url = `${sessionStorage.getItem('apiUrlEndpoint') || 'http://localhost:3000'}/todo/${id}/markasdone`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(() =>{
      mutate(url).then()
    }).catch((e) => console.error(e))
  }
  return (
      <>
        <Box
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
        >
          <Typography>{props.post.description}</Typography>
          <Button
              variant="outlined"
              disabled={props.post.isDone}
              onClick={markAsDone}
          >
            完了
          </Button>
        </Box>
      </>
  )
}