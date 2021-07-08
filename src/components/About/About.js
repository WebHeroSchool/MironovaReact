import React from "react";
import { Octokit } from "@octokit/rest";
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './About.module.css';

const octokit = new Octokit();
class About extends React.Component{
  state={
    isLoading:true,
    repoList:[],
    requestFailed: false,
    error: {}
  }
  componentDidMount(){
    const user = 'MironovaAlina';
    octokit.repos.listForUser({
      username: user
    }).then(({data}) => {
      this.setState({
        repoList: data,
        isLoading: false,
        avatarUrl: data[0].owner.avatar_url,
        login: data[0].owner.login,
        name: data[0].owner.name,
        location:data[0].owner.location
      });
    })
    .catch(err => (
      this.setState({
        requestFailed: true,
        isLoading: false,
        error: err
      })
    ));
  }

render(){
  const {isLoading, repoList, bio, avatarUrl, name, location, requestFailed, error} =this.state;
return(
      <CardContent className={styles.wrap}>
        <h1>{isLoading ? <CircularProgress />:'Обо мне'}</h1>
        <div>
        {requestFailed && (
          <div className={styles.error}>
            <div>{error.name}</div>
            <div>{error.message}</div>
          </div>
        )}
        { isLoading && <CircularProgress /> }
            {!isLoading && repoList.length
              ?
              (<div>
                <img src={avatarUrl} alt="avatar" className={styles.avatarUrl} />
                <h2> {name} </h2>
                <p className={styles.bio}> {bio} </p>
                <p className={styles.location}> {location} </p>
                <h2>Мои репозитории:</h2>
                  <ol>
                    {repoList.map(repo => (<li key={repo.id}>
                      <a href={repo.html_url} className={styles.link}>
                      {repo.name}</a>
                    </li>))}
                  </ol>
              </div>):null
            }
        </div>

      </CardContent>
    );
  }
}
export default About;
