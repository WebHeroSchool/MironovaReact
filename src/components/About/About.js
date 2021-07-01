import React from "react";
import { Octokit } from "@octokit/rest";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './About.module.css';

const octokit = new Octokit();
class About extends React.Component{
  state={
    isLoading:true,
    repoList:[]
  }
  componentDidMount(){
    const user = 'MironovaAlina';
    const url = 'https://api.github.com/users/'+ user;

    octokit.repos.listForUser({
      username: user
    }).then(({data}) => {
      this.setState({
        repoList:data,
        isLoading:false
      });
    });
    fetch(url)
			.then (res => res.json())
			.then (json => {
				if (json.message == 'Not Found') {
					this.setState ({
						notFound: true,
						isLoading: false
					})
				} else {
					this.setState({
						bio: json.bio,
						avatar: json.avatar_url,
            name: json.name,
            location:json.location
					})
				}});
  }
render(){
  const {isLoading, repoList, bio, avatar, notFound, name, location } =this.state;
return(
      <CardContent className={styles.wrap}>
        <h1>{isLoading ? <CircularProgress />:'Обо мне'}</h1>
        <div>
          {!isLoading && notFound && <div>Информация о пользователе не доступна</div>}
          {!isLoading && !notFound &&
            <div>
              <img src={avatar} alt="avatar" className={styles.avatar} />
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
            </div>}
        </div>

      </CardContent>
    );
  }
}
export default About;
