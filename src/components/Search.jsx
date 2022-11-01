import axios from 'axios';
import React from 'react';

const Search = ({setUser, setVisible, setError, visible}) => {
  const [value, setValue] = React.useState('');
  
  const getUset = async () => {

    setVisible(true)
    setUser('')
    setError(false)

    try {
      await axios.get(`https://api.github.com/users/${value}`).then((resp) => {
        setUser(resp.data)
        window.location.hash = value;
      })
    } catch (error) {
      setVisible(false)
      setError(true)
    }

    setVisible(false)
  }

  React.useEffect(  () => {
    if(window.location.hash) {
      const location = window.location.hash
      const pathname = location.slice(1) 
      console.log(pathname)
      setValue(pathname)
      getUset()
    }
  }, [])

  return(
    <div className="app-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="app-input"
        placeholder="Укажите GitHub-аккаунт"
      />
      <button disabled={visible} onClick={getUset} className="app-form_btn">Найти</button>
    </div>
  )
}

export default Search