import React from 'react';

const User = ({...props}) => {

  return(
    <div className="app-user">
      <div className="app-user_info">
        <div className="app-user_image">
          <img src={props.avatar} alt={props.name} />
        </div>
        <div className="app-user_data">
          <h1 className="app-user_name">
            {props.name}
            <a href={props.urlGitHub}>@{props.login}</a>
          </h1>
          <p className="app-user_about">
            {props.bio}
          </p>
        </div>
      </div>
      <ul className="app-user_stats">
        <li className="app-user_stats-item">
          Репозитории
          <span>{props.publicRepos}</span>
        </li>
        <li className="app-user_stats-item">
          Подписчиков
          <span>{props.followers}</span>
        </li>
        <li className="app-user_stats-item">
          Подписок
          <span>{props.publicGists}</span>
        </li>
      </ul>
      <ul className="app-user_location">
        <li className="app-user_location-item">{props.location}</li>
        <li className="app-user_location-item">
          <a href={props.blog}>{props.blog}</a>
        </li>
      </ul>
    </div>
  )
}

export default User

