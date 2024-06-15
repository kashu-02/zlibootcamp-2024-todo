import useSWR from "swr";
import Box from '@mui/material/Box';
import AppBar from './components/AppBar'
import Post from './components/Post'
import List from './components/List'

function App() {
  const url = `${sessionStorage.getItem('apiUrlEndpoint') || 'http://localhost:3000'}/todo`
  const fetcher = async (...args: any[]) => {
    // @ts-ignore
    const res = await fetch(...args);
    return await res.json();
  }

  const {data, error, isLoading} = useSWR(url, fetcher)
  return (
      <>
        <AppBar/>
        <Box
            my='2rem'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
          <Post/>
          <Box
              width='50%'
          >
            {error && <p>取得できませんでした</p>}
            {isLoading && <p>Loading...</p>}
            {!error && !isLoading && data.map((post: any, index: number) =>
                <List post={post} key={index}/>
            )}
          </Box>

        </Box>

      </>
  )
}

export default App
