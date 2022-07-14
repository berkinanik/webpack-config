import { useState } from 'react';

const Person = () => {
  const [name, setName] = useState('');
  return <div>
    <label htmlFor='name'>
      What's your name?
      <input id="name" value={name} onChange={e => setName(e.target.value)} />
    </label>
    <br />
    <span>Hi, {name}!</span>
  </div>;
};

export default Person;