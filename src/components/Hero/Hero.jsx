import s from "./Hero.module.css"
const Hero = ({img}) => {
	return (
		<div className={s.container}>
			<p className={s.welcome}>Welcome to GreenShop</p>
			<h1 className={s.header}>Let’s Make a Better <span>Planet</span></h1>
			<p className={s.info}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
			<button className={s.btn}>shop now</button>
			<img className={s.img} width={500} height={500} src={img}  alt='img'/>
		</div>
	);
};

export default Hero;