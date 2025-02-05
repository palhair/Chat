import { SyntheticEvent, useState } from 'react';
import styles from './LoginPage.module.css';
import { getSettings } from '../../api/account';
import { useNavigate } from 'react-router';

export const LoginPage = () => {
	const [idInstance, setIdInstance] = useState('');
	const [apiTokenInstance, setApiTokenInstance] = useState('');
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const submitHandler = (e: SyntheticEvent) => {
		e.preventDefault();
		fetch('');
		getSettings({ idInstance, apiTokenInstance })
			.then(() => {
				localStorage.setItem(
					'user',
					JSON.stringify({
						idInstance,
						apiTokenInstance,
					})
				);
				setError(false);
				setApiTokenInstance('');
				setIdInstance('');
				navigate('/');
			})
			.catch(() => {
				setError(true);
				setApiTokenInstance('');
				setIdInstance('');
			});
	};

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<h1>Вход</h1>
				<form className={styles.form} onSubmit={submitHandler}>
					<input
						className={styles.input}
						required
						type="text"
						placeholder="idInstance"
						value={idInstance}
						onChange={(e) => setIdInstance(e.target.value)}
					/>
					<input
						className={styles.input}
						required
						type="password"
						placeholder="apiTokenInstance"
						value={apiTokenInstance}
						onChange={(e) => setApiTokenInstance(e.target.value)}
					/>
					<button className={styles.button}>Войти</button>
				</form>
			</div>
			{error && <div className={styles.error}>Пользователь с такими данными не найден</div>}
		</main>
	);
};
