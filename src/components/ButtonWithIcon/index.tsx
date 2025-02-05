import styles from './ButtonWithIcon.module.css';

type Props = {
	src: string;
	alt: string;
	onClick?: () => void;
};
export const ButtonWithIcon = ({ src, alt, onClick }: Props) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<img src={src} alt={alt} />
		</button>
	);
};
