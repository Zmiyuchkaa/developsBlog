import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import AppRouter from "../../components/Router"
import Post from "../post/index"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  nav: {
    marginTop: '30px',
    color: '#314f1a',
    fontWeight: 'bold',
    fontSize: '20px',
    paddingRight: '30px',
  },
  facts: {
    margin: '24px',
    minHeight: 'calc(96vh - 341px)',
    boxSizing: 'border-box',
    padding: '8px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    alignItems: ''
},
  card: {
    width: 345,
    height: 345,
    overlay: 'hidden',
    marginBottom: '30px',
    backgroundColor: '#f0c09e',
    '&:hover': {
      backgroundColor: '#f55531',
    }
  },
  text: {
    marginBottom: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const Posts = () => {
  const classes = useStyles();
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://simple-blog-api.crew.red/posts`)
      .then(response => {
        setPosts(response.data);
        // console.log(response.data);
      });
  }, []);

  return (
    <div>
      <Grid item>
          <Tooltip title="" placement="top-start">
            <Button className={classes.nav} >
              <Link href={`/create/`} as={`/create/`}><p>Create Post</p></Link>
            </Button>
          </Tooltip>
        </Grid>
      <div className={classes.facts}>{posts.slice(0, 6).map(post =>
        <div className='facts-block__card'>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.text}>{post.title}</Typography>
              <Typography className={classes.text}>{post.body}</Typography>
            </CardContent>
            <Button>
              <Link href={`/post/${post.id}`} as={`/post/:id`}><p>Details</p></Link>
            </Button>
          </Card>
        </div>
      )}
      </div>
    </div>
  );   
}

export default Posts;