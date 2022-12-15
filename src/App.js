import './App.css';
import React, { useState } from "react";
import { useForm } from 'react-hook-form'

function App() {
  const [registerData, SetRegisterData]=useState({name: "", 
                                                  email: "", 
                                                  phone: "", 
                                                  login: "", 
                                                  password: "", 
                                                  language: "", 
                                                  about: "", 
                                                  direction: "", 
                                                  submitted: false                                  
  });
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => {
    SetRegisterData({name: data.name, 
                     email: data.email, 
                     phone: data.phone, 
                     login: data.login, 
                     password: data.password, 
                     language: data.language, 
                     about: data.about, 
                     direction: data.direction, 
                     submitted: true
  });
    console.log(data);
  }

  return (
    <div className="box">
      <div hidden={registerData.submitted} className="registration">
        <form className="form" onSubmit={handleSubmit(handleRegistration)} >
        <h1>Реєстрація</h1>
        <p className="block">
          <label className="label" htmlFor="name">Прізвище ім'я</label>
          <input className="text-input" name="name" type="text" {...register('name')}/>
        </p>
        <p className="block">
          <label className="label" htmlFor="email">E-mail</label>
          <input className="text-input" name="email" type="email" {...register('email')}/>
        </p>
        <p className="block">
          <label className="label" htmlFor="phone">Номер телефону</label>
          <input className="text-input" name="phone" type="tel" {...register('phone')}/>
        </p>
        <p className="block">
          <label className="label" htmlFor="login">Логін</label>
          <input className="text-input" name="login" type="text" {...register('login')}/>
        </p>
        <p className="block">
          <label className="label" htmlFor="password">Пароль</label>
          <input className="text-input" name="password" type="password" {...register('password')}/>
        </p>
  
        <div className="block">
          <label className="label">Улюблена мова програмування:</label>
          <ul className="options">
            <li>
              <input id="С" type="radio" name="language" value="С" {...register('language')}/>
              <label htmlFor="С">С</label>
            </li>
            <li>
              <input id="Сpp" type="radio" name="language" value="С++" {...register('language')}/>
              <label htmlFor="Сpp">С++</label>
            </li>
            <li>
              <input id="Сs" type="radio" name="language" value="С#" {...register('language')}/>
              <label htmlFor="Сs">С#</label>
            </li>
            <li>
              <input id="Python" type="radio" name="language" value="Python" {...register('language')}/>
              <label htmlFor="Python">Python</label>
            </li>
            <li>
              <input id="Js" type="radio" name="language" value="Java script" {...register('language')}/>
              <label htmlFor="Js">Java script</label>
            </li>
            <li>
              <input id="J" type="radio" name="language" value="Java" {...register('language')}/>
              <label htmlFor="J">Java</label>
            </li>
            <li>
              <input id="K" type="radio" name="language" value="Kotlin" {...register('language')}/>
              <label htmlFor="K">Kotlin</label>
            </li>

          </ul>
        </div>
        <p className="block">
          <label className="label" htmlFor="about">Про себе</label>
          <textarea className="text-input" name="about" rows="4" {...register('about')}></textarea>
        </p>
        <p className="block">
          <label className="label" htmlFor="select">Розробник</label>
          <select className="select" name="direction" defaultValue="" {...register('direction')}>
            <option value=""></option>
            <option value="Бекенду">Бекенду</option>
            <option value="Фронтенду">Фронтенду</option>
          </select>
        </p>
        <p className="buttonBox">
          <input className="button" type="submit" value="Зареєструватися"/>
        </p>
      </form>
      </div>
      <div className="blank" hidden={!registerData.submitted}>
          <div style={{textAlign: "center"}}>
            <b>Введені дані:</b>
          </div>
          <b>Прізвище ім'я:</b>{registerData.name}<br/>
          <b>Поштова скринька:</b>{registerData.email}<br/> 
          <b>Номер телефону:</b>{registerData.phone}<br/> 
          <b>Логін:</b>{registerData.login}<br/> 
          <b>Пароль:</b>{registerData.password}<br/> 
          <b>Улюблена мова програмування:</b>{registerData.language}<br/> 
          <b>Про себе:</b>{registerData.about}<br/>
          <b>Розробник:</b>{registerData.direction}<br/>
        </div>
    </div>
  );
}

export default App;
