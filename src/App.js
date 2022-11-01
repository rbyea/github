import React, { useTransition } from 'react';

import './App.css';

import axios from 'axios';

import Search from './components/Search';
import User from './components/User';
import Skeleton from './components/Skeleton';

function App() {
  const [user, setUser] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <div className="App" id="app">
      <div className="app-container">
        <Search setUser={setUser} setVisible={setVisible} setError={setError} visible={visible} />

        {error && <p>Пользователь не найден...</p>}

        {visible && <Skeleton />}

        {user && (
          <User
            visible={visible}
            avatar={user.avatar_url}
            bio={user.bio}
            login={user.login}
            name={user.name}
            urlGitHub={user.html_url}
            location={user.location}
            blog={user.blog}
            publicRepos={user.public_repos}
            followers={user.followers}
            publicGists={user.public_gists}
          />
        )}
      </div>
    </div>
  );
}

export default App;
