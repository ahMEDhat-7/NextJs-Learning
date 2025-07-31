'use client';

import React, { useState } from 'react';
import styles from './login.module.css';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`${styles['wrapper']} page-height`}>
      <div className={styles['card-switch']}>
        <div className={styles.switch}>
          <span
            className={`${styles['card-side']} ${!isSignUp ? styles.active : ''}`}
            onClick={() => setIsSignUp(false)}
          >
            Log in
          </span>
          <div className={styles.slider} onClick={() => setIsSignUp(!isSignUp)} />
          <span
            className={`${styles['card-side']} ${isSignUp ? styles.active : ''}`}
            onClick={() => setIsSignUp(true)}
          >
            Sign up
          </span>
        </div>
        <div className={`${styles['flip-card__inner']} ${isSignUp ? styles.flipped : ''}`}>
          <div className={styles['flip-card__front']}>
            <div className={styles.title}>Log in</div>
            <form className={styles['flip-card__form']}>
              <input className={styles['flip-card__input']} name="email" placeholder="Email" type="email" />
              <input className={styles['flip-card__input']} name="password" placeholder="Password" type="password" />
              <button type="submit" className={styles['flip-card__btn']}>Let&apos;s go!</button>
            </form>
          </div>
          <div className={styles['flip-card__back']}>
            <div className={styles.title}>Sign up</div>
            <form className={styles['flip-card__form']}>
              <input className={styles['flip-card__input']} name="name" placeholder="Name" type="text" />
              <input className={styles['flip-card__input']} name="email" placeholder="Email" type="email" />
              <input className={styles['flip-card__input']} name="password" placeholder="Password" type="password" />
              <button type="submit" className={styles['flip-card__btn']}>Confirm!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
